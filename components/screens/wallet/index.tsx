import { registerScreen } from "@/components/screens/registry";
import { useAuthStore } from "@/stores/auth";
import WalletSelect from "./wallet-select";
import WalletApprove from "./wallet-approve";
import WalletConnected from "./wallet-connected";
import WalletHome from "./wallet-home";

registerScreen("wallet-select", (ctx) => (
  <WalletSelect onSelect={ctx.selectWallet} />
));

registerScreen("wallet-approve", (ctx) => (
  <WalletApprove
    walletId={ctx.selectedWalletId}
    onApproved={(address: string) => {
      useAuthStore.getState().setConnectedAddress(address);
      useAuthStore.getState().setIsConnected(true);
      ctx.nav.push("wallet-connected");
    }}
    onRetry={() => ctx.nav.replace("wallet-select")}
  />
));

registerScreen("wallet-connected", (ctx) => (
  <WalletConnected
    address={ctx.address}
    onContinue={() => ctx.nav.push("smart-account-create")}
  />
));

registerScreen("wallet-home", (ctx) => (
  <WalletHome
    address={ctx.address}
    balances={ctx.balances}
    loading={ctx.loading}
    fetchBalances={ctx.fetchBalances}
    onBuy={() => ctx.nav.push("funding-hub")}
    onSend={() => ctx.nav.push("send-select-type")}
    onSwap={() => ctx.nav.push("swap-select-token-in")}
    onCopy={() => {
      if (ctx.address) {
        navigator.clipboard.writeText(ctx.address);
      }
    }}
  />
));
