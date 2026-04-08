import { registerScreen } from "@/components/screens/registry";
import SwapMain from "./swap-main";
import SwapReview from "./swap-review";
import SwapConfirm from "./swap-confirm";
import SwapSuccess from "./swap-success";

registerScreen("swap-select-token-in", (ctx) => (
  <SwapMain
    sellAsset={ctx.swap.sellAsset}
    buyAsset={ctx.swap.buyAsset}
    amount={ctx.swap.amount}
    onSwap={(sellAsset, buyAsset, amount) => {
      ctx.setSwap({ sellAsset, buyAsset, amount });
      ctx.nav.push("swap-review");
    }}
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
  <SwapConfirm
    sellAsset={ctx.swap.sellAsset}
    buyAsset={ctx.swap.buyAsset}
    amount={ctx.swap.amount}
    onSuccess={(txHash, received) => {
      ctx.setTxHash(txHash);
      ctx.nav.pushNext();
    }}
    onRetry={() => ctx.nav.back()}
  />
));

registerScreen("swap-success", (ctx) => (
  <SwapSuccess
    txHash={ctx.txHash}
    onDone={() => {
      ctx.fetchBalances();
      ctx.closeModal();
    }}
  />
));
