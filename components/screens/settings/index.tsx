import { registerScreen } from "@/components/screens/registry";
import SettingsMain from "./settings-main";
import SettingsDisconnect from "./settings-disconnect";

registerScreen("settings", (ctx) => (
  <SettingsMain onSelect={(route) => ctx.nav.push(route)} />
));

registerScreen("settings-disconnect", (ctx) => (
  <SettingsDisconnect
    onConfirm={() => ctx.nav.push("settings-disconnect-confirm")}
    onCancel={() => ctx.nav.back()}
  />
));
