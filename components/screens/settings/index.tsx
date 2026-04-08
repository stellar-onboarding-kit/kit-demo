import { registerScreen } from "@/components/screens/registry";
import { useAuthStore } from "@/stores/auth";
import { useWalletStore } from "@/stores/wallet";
import SettingsMain from "./settings-main";
import SettingsDisconnect from "./settings-disconnect";
import SettingsDisconnectConfirm from "./settings-disconnect-confirm";

registerScreen("settings", (ctx) => (
  <SettingsMain onSelect={(route) => ctx.nav.push(route)} />
));

registerScreen("settings-disconnect", (ctx) => (
  <SettingsDisconnect
    onConfirm={() => {
      useAuthStore.getState().setIsConnected(false);
      useAuthStore.getState().setConnectedAddress(null);
      useAuthStore.getState().setSelectedWalletId(null);
      useWalletStore.getState().setBalances([]);
      useWalletStore.getState().setPayments([]);
      ctx.nav.push("settings-disconnect-confirm");
    }}
    onCancel={() => ctx.nav.back()}
  />
));

registerScreen("settings-disconnect-confirm", (ctx) => (
  <SettingsDisconnectConfirm onDone={() => ctx.nav.replace("welcome")} />
));
