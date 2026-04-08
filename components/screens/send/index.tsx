import { registerScreen } from "@/components/screens/registry";
import SendSelectType from "./send-select-type";
import SendEnterAddress from "./send-enter-address";
import SendEnterAmount from "./send-enter-amount";
import SendReview from "./send-review";
import SendConfirm from "./send-confirm";
import SendSuccess from "./send-success";

registerScreen("send-select-type", (ctx) => (
  <SendSelectType onSelect={(type) => ctx.nav.push(type)} />
));

registerScreen("send-enter-address", (ctx) => (
  <SendEnterAddress
    value={ctx.send.destination}
    onChange={(v) => ctx.setSend({ destination: v })}
    onNext={() => ctx.nav.pushNext()}
  />
));

registerScreen("send-enter-amount", (ctx) => (
  <SendEnterAmount
    value={ctx.send.amount}
    asset={ctx.send.asset}
    onChange={(v) => ctx.setSend({ amount: v })}
    onNext={() => ctx.nav.pushNext()}
  />
));

registerScreen("send-review", (ctx) => (
  <SendReview
    to={ctx.send.destination}
    amount={ctx.send.amount}
    asset={ctx.send.asset}
    onConfirm={() => {
      ctx.prepareSendXdr();
      ctx.nav.pushNext();
    }}
  />
));

registerScreen("send-confirm", (ctx) => (
  <SendConfirm
    destination={ctx.send.destination}
    amount={ctx.send.amount}
    asset={ctx.send.asset}
    onSuccess={(txHash) => {
      ctx.setTxHash(txHash);
      ctx.nav.pushNext();
    }}
    onRetry={() => ctx.nav.back()}
  />
));

registerScreen("send-success", (ctx) => (
  <SendSuccess
    txHash={ctx.txHash}
    onDone={() => {
      ctx.nav.replace("wallet-home");
      ctx.fetchBalances();
    }}
  />
));
