import { registerScreen } from "@/components/screens/registry";
import WalletSelect from "./wallet-select";
import WalletApprove from "./wallet-approve";

registerScreen("wallet-select", (ctx) => (
  <WalletSelect onSelect={ctx.selectWallet} />
));

registerScreen("wallet-approve", (ctx) => (
  <WalletApprove walletId={ctx.selectedWalletId} />
));
