import { registerScreen } from "@/components/screens/registry";
import SwapSelectToken from "./swap-select-token";
import SwapEnterAmount from "./swap-enter-amount";
import SwapReview from "./swap-review";
import SwapConfirm from "./swap-confirm";
import SwapSuccess from "./swap-success";
import SwapSlippageWarning from "./swap-slippage-warning";

registerScreen("swap-select-token-in", (ctx) => (
  <SwapSelectToken direction="in" onSelect={() => ctx.nav.pushNext()} />
));

registerScreen("swap-select-token-out", (ctx) => (
  <SwapSelectToken direction="out" onSelect={() => ctx.nav.pushNext()} />
));

registerScreen("swap-enter-amount", (ctx) => (
  <SwapEnterAmount onNext={() => ctx.nav.pushNext()} />
));

registerScreen("swap-review", (ctx) => (
  <SwapReview onConfirm={() => ctx.nav.pushNext()} />
));

registerScreen("swap-confirm", () => <SwapConfirm />);

registerScreen("swap-success", (ctx) => (
  <SwapSuccess onDone={() => ctx.nav.replace("wallet-home")} />
));

registerScreen("swap-slippage-warning", (ctx) => (
  <SwapSlippageWarning
    onProceed={() => ctx.nav.push("swap-confirm")}
    onAdjust={() => ctx.nav.back()}
  />
));
