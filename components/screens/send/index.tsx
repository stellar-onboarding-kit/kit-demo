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
  <SendEnterAddress onNext={() => ctx.nav.pushNext()} />
));

registerScreen("send-enter-amount", (ctx) => (
  <SendEnterAmount onNext={() => ctx.nav.pushNext()} />
));

registerScreen("send-review", (ctx) => (
  <SendReview onConfirm={() => ctx.nav.pushNext()} />
));

registerScreen("send-confirm", () => <SendConfirm />);

registerScreen("send-success", (ctx) => (
  <SendSuccess onDone={() => ctx.nav.replace("wallet-home")} />
));
