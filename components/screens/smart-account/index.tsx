import { registerScreen } from "@/components/screens/registry";
import CreateSmartAccount from "./create";
import SmartAccountConfirm from "./confirm";
import SmartAccountSuccess from "./success";

registerScreen("smart-account-create", (ctx) => (
  <CreateSmartAccount onConfirm={() => ctx.nav.pushNext()} />
));

registerScreen("smart-account-confirm", () => (
  <SmartAccountConfirm />
));

registerScreen("smart-account-success", (ctx) => (
  <SmartAccountSuccess onContinue={() => ctx.nav.pushNext()} />
));
