import { registerScreen } from "@/components/screens/registry";
import SwapSelectToken from "./swap-select-token";
import SwapEnterAmount from "./swap-enter-amount";
import SwapReview from "./swap-review";
import SwapConfirm from "./swap-confirm";
import SwapSuccess from "./swap-success";
import SwapSlippageWarning from "./swap-slippage-warning";

registerScreen("swap-select-token-in", (ctx) => (
  <SwapSelectToken
    direction="in"
    current={ctx.swap.sellAsset}
    onSelect={(token) => {
      ctx.setSwap({ sellAsset: token });
      ctx.nav.pushNext();
    }}
  />
));

registerScreen("swap-select-token-out", (ctx) => (
  <SwapSelectToken
    direction="out"
    current={ctx.swap.buyAsset}
    onSelect={(token) => {
      ctx.setSwap({ buyAsset: token });
      ctx.nav.pushNext();
    }}
  />
));

registerScreen("swap-enter-amount", (ctx) => (
  <SwapEnterAmount
    value={ctx.swap.amount}
    sellAsset={ctx.swap.sellAsset}
    buyAsset={ctx.swap.buyAsset}
    onChange={(v) => ctx.setSwap({ amount: v })}
    onNext={() => ctx.nav.pushNext()}
  />
));

registerScreen("swap-review", (ctx) => (
  <SwapReview
    sellAsset={ctx.swap.sellAsset}
    buyAsset={ctx.swap.buyAsset}
    amount={ctx.swap.amount}
    slippage={ctx.swap.slippage}
    onConfirm={() => {
      ctx.prepareSwapXdr();
      ctx.nav.pushNext();
    }}
  />
));

registerScreen("swap-confirm", (ctx) => (
  <SwapConfirm loading={ctx.loading} error={ctx.error} />
));

registerScreen("swap-success", (ctx) => (
  <SwapSuccess
    txHash={ctx.txHash}
    onDone={() => ctx.nav.replace("wallet-home")}
  />
));

registerScreen("swap-slippage-warning", (ctx) => (
  <SwapSlippageWarning
    onProceed={() => ctx.nav.push("swap-confirm")}
    onAdjust={() => ctx.nav.back()}
  />
));
