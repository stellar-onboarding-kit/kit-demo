import { registerScreen } from "@/components/screens/registry";
import CreateSmartAccount from "./create";
import SmartAccountSuccess from "./success";

registerScreen("smart-account-create", (ctx) => (
  <CreateSmartAccount onSuccess={() => ctx.nav.push("smart-account-success")} />
));

registerScreen("smart-account-success", (ctx) => (
  <SmartAccountSuccess onContinue={() => ctx.nav.pushNext()} />
));
