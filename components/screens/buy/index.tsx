import { registerScreen } from "@/components/screens/registry";
import BuySelectProvider from "./buy-select-provider";
import BuyEnterAmount from "./buy-enter-amount";
import BuyCardInput from "./buy-card-input";
import BuyConfirm from "./buy-confirm";
import BuySuccess from "./buy-success";

interface BuyState {
  provider: string;
  amount: string;
}

const buyState: BuyState = {
  provider: "",
  amount: "",
};

registerScreen("buy-enter-amount", (ctx) => (
  <BuySelectProvider
    onSelect={(provider) => {
      buyState.provider = provider;
      ctx.nav.push("buy-select-payment");
    }}
  />
));

registerScreen("buy-select-payment", (ctx) => (
  <BuyEnterAmount
    value={buyState.amount}
    provider={buyState.provider}
    onChange={(v) => (buyState.amount = v)}
    onNext={() => {
      if (buyState.provider === "card") {
        ctx.nav.push("buy-review");
      } else {
        ctx.nav.push("buy-confirm");
      }
    }}
    onChangeProvider={() => ctx.nav.back()}
  />
));

registerScreen("buy-review", (ctx) => (
  <BuyCardInput
    amount={buyState.amount}
    onConfirm={() => ctx.nav.pushNext()}
  />
));

registerScreen("buy-confirm", (ctx) => (
  <BuyConfirm
    amount={buyState.amount}
    provider={buyState.provider}
    onSuccess={() => ctx.nav.pushNext()}
    onRetry={() => ctx.nav.back()}
  />
));

registerScreen("buy-success", (ctx) => (
  <BuySuccess
    amount={buyState.amount}
    onDone={() => {
      buyState.amount = "";
      buyState.provider = "";
      ctx.fetchBalances();
      ctx.closeModal();
    }}
  />
));
