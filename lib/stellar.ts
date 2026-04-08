const HORIZON_URL = process.env.NEXT_PUBLIC_HORIZON_URL ?? "https://horizon-testnet.stellar.org";
const NETWORK_PASSPHRASE = process.env.NEXT_PUBLIC_NETWORK_PASSPHRASE ?? "Test SDF Network ; September 2015";

export interface StellarBalance {
  asset: string;
  balance: string;
}

export interface StellarTransaction {
  id: string;
  type: string;
  createdAt: string;
  sourceAccount: string;
  memo?: string;
  successful: boolean;
}

export interface StellarPayment {
  id: string;
  type: string;
  from: string;
  to: string;
  amount: string;
  asset: string;
  createdAt: string;
}

async function horizonGet<T>(path: string): Promise<T> {
  const res = await fetch(`${HORIZON_URL}${path}`);
  if (!res.ok) throw new Error(`Horizon ${res.status}: ${path}`);
  return res.json();
}

export async function getAccount(publicKey: string) {
  return horizonGet<{
    id: string;
    sequence: string;
    balances: Array<{
      asset_type: string;
      asset_code?: string;
      asset_issuer?: string;
      balance: string;
    }>;
  }>(`/accounts/${publicKey}`);
}

export async function getBalances(publicKey: string): Promise<StellarBalance[]> {
  const account = await getAccount(publicKey);
  return account.balances.map((b) => ({
    asset: b.asset_type === "native" ? "XLM" : (b.asset_code ?? "unknown"),
    balance: b.balance,
  }));
}

export async function getPayments(publicKey: string, limit = 20): Promise<StellarPayment[]> {
  const data = await horizonGet<{
    _embedded: {
      records: Array<{
        id: string;
        type: string;
        from: string;
        to: string;
        amount: string;
        asset_type: string;
        asset_code?: string;
        created_at: string;
      }>;
    };
  }>(`/accounts/${publicKey}/payments?limit=${limit}&order=desc`);

  return data._embedded.records
    .filter((r) => r.type === "payment")
    .map((r) => ({
      id: r.id,
      type: r.type,
      from: r.from,
      to: r.to,
      amount: r.amount,
      asset: r.asset_type === "native" ? "XLM" : (r.asset_code ?? "unknown"),
      createdAt: r.created_at,
    }));
}

export async function getTransactions(publicKey: string, limit = 20): Promise<StellarTransaction[]> {
  const data = await horizonGet<{
    _embedded: {
      records: Array<{
        id: string;
        source_account: string;
        created_at: string;
        memo?: string;
        successful: boolean;
        operation_count: number;
      }>;
    };
  }>(`/accounts/${publicKey}/transactions?limit=${limit}&order=desc`);

  return data._embedded.records.map((r) => ({
    id: r.id,
    type: `${r.operation_count} op${r.operation_count > 1 ? "s" : ""}`,
    createdAt: r.created_at,
    sourceAccount: r.source_account,
    memo: r.memo,
    successful: r.successful,
  }));
}

export function buildPaymentXdr(params: {
  source: string;
  destination: string;
  amount: string;
  asset: string;
}) {
  return {
    type: "payment",
    networkPassphrase: NETWORK_PASSPHRASE,
    ...params,
  };
}

export function buildSwapXdr(params: {
  source: string;
  sellAsset: string;
  buyAsset: string;
  amount: string;
  slippage: number;
}) {
  return {
    type: "path_payment_strict_send",
    networkPassphrase: NETWORK_PASSPHRASE,
    destMin: String(Number(params.amount) * (1 - params.slippage)),
    ...params,
  };
}

export function buildCreateAccountXdr(params: {
  source: string;
  destination: string;
  startingBalance: string;
}) {
  return {
    type: "create_account",
    networkPassphrase: NETWORK_PASSPHRASE,
    ...params,
  };
}

export async function submitTransaction(xdr: string): Promise<{ hash: string; successful: boolean }> {
  const res = await fetch(`${HORIZON_URL}/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `tx=${encodeURIComponent(xdr)}`,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.extras?.result_codes?.transaction ?? "Transaction failed");
  return { hash: data.hash, successful: data.successful };
}

export function truncateAddress(address: string, chars = 4): string {
  if (address.length <= chars * 2 + 3) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}
