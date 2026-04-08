import { registerScreen } from "@/components/screens/registry";
import WalletSelect from "./wallet-select";
import WalletConfirm from "./wallet-confirm";

registerScreen("wallet-select", (ctx) => (
  <WalletSelect onSelect={ctx.selectWallet} />
));

registerScreen("wallet-confirm", (ctx) => (
  <WalletConfirm walletId={ctx.selectedWalletId} />
));
