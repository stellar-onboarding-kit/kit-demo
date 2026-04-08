import { registerScreen } from "@/components/screens/registry";
import ReceiveSelectAsset from "./receive-select-asset";
import ReceiveQr from "./receive-qr";
import ReceiveSuccess from "./receive-success";

registerScreen("receive-select-asset", (ctx) => (
  <ReceiveSelectAsset onSelect={() => ctx.nav.pushNext()} />
));

registerScreen("receive-qr", () => (
  <ReceiveQr onCopy={() => {}} />
));

registerScreen("receive-success", (ctx) => (
  <ReceiveSuccess onDone={() => ctx.nav.replace("wallet-home")} />
));
