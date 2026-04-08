import { registerScreen } from "@/components/screens/registry";
import FundingHub from "./funding-hub";

registerScreen("funding-hub", (ctx) => (
  <FundingHub onSelect={(route) => ctx.nav.push(route)} />
));

registerScreen("add-funds", (ctx) => (
  <FundingHub onSelect={(route) => ctx.nav.push(route)} />
));
