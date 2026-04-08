import { registerScreen } from "@/components/screens/registry";
import { useAuthStore } from "@/stores/auth";
import WalletSelect from "./wallet-select";
import WalletApprove from "./wallet-approve";
import WalletConnected from "./wallet-connected";

registerScreen("wallet-select", (ctx) => (
  <WalletSelect onSelect={ctx.selectWallet} />
));

registerScreen("wallet-approve", (ctx) => (
  <WalletApprove
    walletId={ctx.selectedWalletId}
    onApproved={() => {
      const testAddress = "GBZX4364PEPQTDICMIQDZ56K4T75QZCR4NBEYKO6PDRJAHZKGUOJPCXB";
      useAuthStore.getState().setConnectedAddress(testAddress);
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
