import { registerScreen } from "@/components/screens/registry";
import ReceiveSelectAsset from "./receive-select-asset";
import ReceiveQr from "./receive-qr";
import ReceiveSuccess from "./receive-success";

registerScreen("receive-select-asset", (ctx) => (
  <ReceiveSelectAsset onSelect={() => ctx.nav.pushNext()} />
));

registerScreen("receive-qr", (ctx) => (
  <ReceiveQr
    address={ctx.address}
    onCopy={() => {
      if (ctx.address) navigator.clipboard.writeText(ctx.address);
    }}
  />
));

registerScreen("receive-success", (ctx) => (
  <ReceiveSuccess onDone={() => ctx.nav.replace("wallet-home")} />
));
