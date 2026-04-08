import { registerScreen } from "@/components/screens/registry";
import Welcome from "./welcome";

registerScreen("welcome", (ctx) => (
  <Welcome onConnect={() => ctx.nav.push("wallet-select")} />
));
