import { registerScreen } from "@/components/screens/registry";
import CexInstructions from "./cex-instructions";
import CexCopyAddress from "./cex-copy-address";

registerScreen("cex-instructions", (ctx) => (
  <CexInstructions onContinue={() => ctx.nav.pushNext()} />
));

registerScreen("cex-copy-address", (ctx) => (
  <CexCopyAddress
    address={ctx.address}
    onDone={() => ctx.nav.replace("wallet-home")}
  />
));
