import { registerScreen } from "@/components/screens/registry";
import { useWalletStore } from "@/stores/wallet";
import BuyEnterAmount from "./buy-enter-amount";
import BuySelectPayment from "./buy-select-payment";
import BuyReview from "./buy-review";
import BuyConfirm from "./buy-confirm";
import BuySuccess from "./buy-success";

interface BuyState {
  amount: string;
  paymentMethod: string;
}

const buyState: BuyState = {
  amount: "",
  paymentMethod: "",
};

registerScreen("buy-enter-amount", (ctx) => (
  <BuyEnterAmount
    value={buyState.amount}
    onChange={(v) => (buyState.amount = v)}
    onNext={() => ctx.nav.pushNext()}
  />
));

registerScreen("buy-select-payment", (ctx) => (
  <BuySelectPayment
    onSelect={(method) => {
      buyState.paymentMethod = method;
      ctx.nav.pushNext();
    }}
  />
));

registerScreen("buy-review", (ctx) => (
  <BuyReview
    amount={buyState.amount}
    paymentMethod={buyState.paymentMethod}
    onConfirm={() => ctx.nav.pushNext()}
  />
));

registerScreen("buy-confirm", (ctx) => (
  <BuyConfirm
    amount={buyState.amount}
    paymentMethod={buyState.paymentMethod}
    onSuccess={() => ctx.nav.pushNext()}
    onRetry={() => ctx.nav.back()}
  />
));

registerScreen("buy-success", (ctx) => (
  <BuySuccess
    amount={buyState.amount}
    onDone={() => {
      buyState.amount = "";
      buyState.paymentMethod = "";
      ctx.nav.replace("wallet-home");
      ctx.fetchBalances();
    }}
  />
));
