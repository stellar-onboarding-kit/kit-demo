export type StepId =
  | "welcome"
  | "connect-wallet"
  | "wallet-select"
  | "wallet-approve"
  | "wallet-connected"
  | "smart-account-create"
  | "smart-account-confirm"
  | "smart-account-success"
  | "wallet-home"
  | "balance"
  | "token-list"
  | "activity"
  | "add-funds"
  | "funding-hub"
  | "buy-enter-amount"
  | "buy-select-payment"
  | "buy-review"
  | "buy-confirm"
  | "buy-processing"
  | "buy-success"
  | "receive-select-asset"
  | "receive-qr"
  | "receive-enter-amount"
  | "receive-share"
  | "receive-waiting"
  | "receive-detected"
  | "receive-success"
  | "cex-instructions"
  | "cex-copy-address"
  | "cex-waiting"
  | "cex-detected"
  | "cex-processing"
  | "cex-success"
  | "bridge-connect"
  | "bridge-select-chain"
  | "bridge-enter-amount"
  | "bridge-confirm"
  | "bridge-processing"
  | "bridge-success"
  | "request-generate"
  | "request-share"
  | "request-waiting"
  | "request-success"
  | "send-select-type"
  | "send-enter-address"
  | "send-select-contact"
  | "send-scan-qr"
  | "send-select-token"
  | "send-enter-amount"
  | "send-review"
  | "send-confirm"
  | "send-success"
  | "send-insufficient-balance"
  | "swap-select-token-in"
  | "swap-select-token-out"
  | "swap-enter-amount"
  | "swap-review"
  | "swap-confirm"
  | "swap-success"
  | "swap-slippage-warning"
  | "swap-insufficient-liquidity"
  | "dapp-connect"
  | "dapp-transaction"
  | "dapp-sign-message"
  | "dapp-batch-preview"
  | "dapp-success"
  | "dapp-failed"
  | "session-active"
  | "session-approve"
  | "session-expired"
  | "session-reauth"
  | "activity-list"
  | "activity-detail"
  | "activity-filter"
  | "settings"
  | "settings-account"
  | "settings-security"
  | "settings-notifications"
  | "settings-address-book"
  | "settings-disconnect"
  | "settings-disconnect-confirm"
  | "security-keys"
  | "security-key-detail"
  | "security-backup"
  | "security-backup-confirm"
  | "security-recovery"
  | "security-recovery-verify"
  | "address-book"
  | "address-book-add"
  | "address-book-scan"
  | "address-book-select";

export type StepGroup =
  | "onboarding"
  | "wallet"
  | "smart-account"
  | "home"
  | "funding"
  | "buy"
  | "receive"
  | "cex"
  | "bridge"
  | "request"
  | "send"
  | "swap"
  | "dapp"
  | "session"
  | "activity"
  | "settings"
  | "security"
  | "address-book";

export interface Step {
  id: StepId;
  label: string;
  group: StepGroup;
}

export interface SocialProvider {
  id: string;
  name: string;
  icon: string;
}

export interface Wallet {
  id: string;
  name: string;
  icon: string;
}

export interface RouteItem {
  id: StepId;
  label: string;
  description?: string;
}

export const STEPS: Step[] = [
  { id: "welcome",                label: "Welcome",              group: "onboarding" },
  { id: "connect-wallet",         label: "Connect Wallet",       group: "onboarding" },
  { id: "wallet-select",          label: "Select Wallet",        group: "wallet" },
  { id: "wallet-approve",         label: "Approve Connection",   group: "wallet" },
  { id: "wallet-connected",       label: "Connected",            group: "wallet" },
  { id: "smart-account-create",   label: "Create Smart Account", group: "smart-account" },
  { id: "smart-account-confirm",  label: "Confirm",              group: "smart-account" },
  { id: "smart-account-success",  label: "Wallet Ready",         group: "smart-account" },
  { id: "wallet-home",            label: "Wallet",               group: "home" },
  { id: "balance",                label: "Balance",              group: "home" },
  { id: "token-list",             label: "Tokens",               group: "home" },
  { id: "activity",               label: "Activity",             group: "home" },
  { id: "add-funds",              label: "Add Funds",            group: "funding" },
  { id: "funding-hub",            label: "Funding Hub",          group: "funding" },
  { id: "buy-enter-amount",       label: "Enter Amount",         group: "buy" },
  { id: "buy-select-payment",     label: "Select Payment",       group: "buy" },
  { id: "buy-review",             label: "Review Purchase",      group: "buy" },
  { id: "buy-confirm",            label: "Confirm Purchase",     group: "buy" },
  { id: "buy-processing",         label: "Processing",           group: "buy" },
  { id: "buy-success",            label: "Purchase Complete",    group: "buy" },
  { id: "receive-select-asset",   label: "Select Asset",         group: "receive" },
  { id: "receive-qr",             label: "Receive",              group: "receive" },
  { id: "receive-enter-amount",   label: "Request Amount",       group: "receive" },
  { id: "receive-share",          label: "Share",                group: "receive" },
  { id: "receive-waiting",        label: "Waiting",              group: "receive" },
  { id: "receive-detected",       label: "Detected",             group: "receive" },
  { id: "receive-success",        label: "Received",             group: "receive" },
  { id: "cex-instructions",       label: "Instructions",         group: "cex" },
  { id: "cex-copy-address",       label: "Copy Address",         group: "cex" },
  { id: "cex-waiting",            label: "Waiting",              group: "cex" },
  { id: "cex-detected",           label: "Detected",             group: "cex" },
  { id: "cex-processing",         label: "Processing",           group: "cex" },
  { id: "cex-success",            label: "Success",              group: "cex" },
  { id: "bridge-connect",         label: "Connect Wallet",       group: "bridge" },
  { id: "bridge-select-chain",    label: "Select Chain",         group: "bridge" },
  { id: "bridge-enter-amount",    label: "Enter Amount",         group: "bridge" },
  { id: "bridge-confirm",         label: "Confirm Bridge",       group: "bridge" },
  { id: "bridge-processing",      label: "Processing",           group: "bridge" },
  { id: "bridge-success",         label: "Bridge Complete",      group: "bridge" },
  { id: "request-generate",       label: "Generate Request",     group: "request" },
  { id: "request-share",          label: "Share Request",        group: "request" },
  { id: "request-waiting",        label: "Waiting",              group: "request" },
  { id: "request-success",        label: "Request Complete",     group: "request" },
  { id: "send-select-type",       label: "Send",                 group: "send" },
  { id: "send-enter-address",     label: "Enter Address",        group: "send" },
  { id: "send-select-contact",    label: "Select Contact",       group: "send" },
  { id: "send-scan-qr",           label: "Scan QR",              group: "send" },
  { id: "send-select-token",      label: "Select Token",         group: "send" },
  { id: "send-enter-amount",      label: "Enter Amount",         group: "send" },
  { id: "send-review",            label: "Review",               group: "send" },
  { id: "send-confirm",           label: "Confirm",              group: "send" },
  { id: "send-success",           label: "Sent",                 group: "send" },
  { id: "send-insufficient-balance", label: "Insufficient Balance", group: "send" },
  { id: "swap-select-token-in",   label: "Select Token",         group: "swap" },
  { id: "swap-select-token-out",  label: "Select Token",         group: "swap" },
  { id: "swap-enter-amount",      label: "Enter Amount",         group: "swap" },
  { id: "swap-review",            label: "Review Swap",          group: "swap" },
  { id: "swap-confirm",           label: "Confirm Swap",         group: "swap" },
  { id: "swap-success",           label: "Swap Complete",        group: "swap" },
  { id: "swap-slippage-warning",  label: "Slippage Warning",     group: "swap" },
  { id: "swap-insufficient-liquidity", label: "Insufficient Liquidity", group: "swap" },
  { id: "dapp-connect",           label: "Connect",              group: "dapp" },
  { id: "dapp-transaction",       label: "Approve Transaction",  group: "dapp" },
  { id: "dapp-sign-message",      label: "Sign Message",         group: "dapp" },
  { id: "dapp-batch-preview",     label: "Batch Preview",        group: "dapp" },
  { id: "dapp-success",           label: "Success",              group: "dapp" },
  { id: "dapp-failed",            label: "Failed",               group: "dapp" },
  { id: "session-active",         label: "Session Active",       group: "session" },
  { id: "session-approve",        label: "Approve",              group: "session" },
  { id: "session-expired",        label: "Session Expired",      group: "session" },
  { id: "session-reauth",         label: "Re-authenticate",      group: "session" },
  { id: "activity-list",          label: "Activity",             group: "activity" },
  { id: "activity-detail",        label: "Transaction",          group: "activity" },
  { id: "activity-filter",        label: "Filter",               group: "activity" },
  { id: "settings",               label: "Settings",             group: "settings" },
  { id: "settings-account",       label: "Account",              group: "settings" },
  { id: "settings-security",      label: "Security",             group: "settings" },
  { id: "settings-notifications", label: "Notifications",        group: "settings" },
  { id: "settings-address-book",  label: "Address Book",         group: "settings" },
  { id: "settings-disconnect",    label: "Disconnect",           group: "settings" },
  { id: "settings-disconnect-confirm", label: "Confirm Disconnect", group: "settings" },
  { id: "security-keys",          label: "Keys",                 group: "security" },
  { id: "security-key-detail",    label: "Key Details",          group: "security" },
  { id: "security-backup",        label: "Backup",               group: "security" },
  { id: "security-backup-confirm", label: "Confirm Backup",      group: "security" },
  { id: "security-recovery",      label: "Recovery",             group: "security" },
  { id: "security-recovery-verify", label: "Verify Recovery",    group: "security" },
  { id: "address-book",           label: "Address Book",         group: "address-book" },
  { id: "address-book-add",       label: "Add Contact",          group: "address-book" },
  { id: "address-book-scan",      label: "Scan QR",              group: "address-book" },
  { id: "address-book-select",    label: "Select Contact",       group: "address-book" },
];

export const MAIN_STEPS = STEPS.filter((s) => s.group === "onboarding" || s.group === "home");

export const STEP_NEXT: Partial<Record<StepId, StepId>> = {
  "welcome":              "connect-wallet",
  "connect-wallet":       "wallet-select",
  "wallet-select":        "wallet-approve",
  "wallet-approve":       "wallet-connected",
  "wallet-connected":     "smart-account-create",
  "smart-account-create": "smart-account-success",
  "smart-account-success": "wallet-home",
  "buy-enter-amount":     "buy-select-payment",
  "buy-select-payment":   "buy-review",
  "buy-review":           "buy-confirm",
  "buy-confirm":          "buy-processing",
  "buy-processing":       "buy-success",
  "receive-select-asset": "receive-qr",
  "receive-enter-amount": "receive-share",
  "receive-share":        "receive-waiting",
  "receive-waiting":      "receive-detected",
  "receive-detected":     "receive-success",
  "cex-instructions":     "cex-copy-address",
  "cex-copy-address":     "cex-waiting",
  "cex-waiting":          "cex-detected",
  "cex-detected":         "cex-processing",
  "cex-processing":       "cex-success",
  "bridge-connect":       "bridge-select-chain",
  "bridge-select-chain":  "bridge-enter-amount",
  "bridge-enter-amount":  "bridge-confirm",
  "bridge-confirm":       "bridge-processing",
  "bridge-processing":    "bridge-success",
  "request-generate":     "request-share",
  "request-share":        "request-waiting",
  "request-waiting":      "request-success",
  "send-enter-address":   "send-enter-amount",
  "send-select-contact":  "send-enter-amount",
  "send-scan-qr":         "send-enter-amount",
  "send-select-token":    "send-enter-amount",
  "send-enter-amount":    "send-review",
  "send-review":          "send-confirm",
  "send-confirm":         "send-success",
  "swap-select-token-in": "swap-select-token-out",
  "swap-select-token-out": "swap-enter-amount",
  "swap-enter-amount":    "swap-review",
  "swap-review":          "swap-confirm",
  "swap-confirm":         "swap-success",
  "dapp-transaction":     "dapp-success",
  "dapp-sign-message":    "dapp-success",
  "dapp-batch-preview":   "dapp-success",
  "session-expired":      "session-reauth",
  "session-reauth":       "session-active",
  "settings-disconnect":  "settings-disconnect-confirm",
  "security-backup":      "security-backup-confirm",
  "security-recovery":    "security-recovery-verify",
  "address-book-scan":    "address-book-add",
};

export const SOCIALS: SocialProvider[] = [
  { id: "google",    name: "Google",    icon: "google" },
  { id: "discord",   name: "Discord",   icon: "discord" },
  { id: "github",    name: "Github",    icon: "github" },
  { id: "apple",     name: "Apple",     icon: "apple" },
  { id: "farcaster", name: "Farcaster", icon: "farcaster" },
];

export const WALLETS: Wallet[] = [
  { id: "metamask",        name: "MetaMask",        icon: "metamask" },
  { id: "coinbase-wallet", name: "Coinbase Wallet",  icon: "coinbase" },
  { id: "phantom",         name: "Phantom",          icon: "phantom" },
  { id: "rainbow-wallet",  name: "Rainbow Wallet",   icon: "rainbow-wallet" },
  { id: "other-wallets",   name: "Other Wallets",    icon: "other-wallets" },
];

export const FUNDING_ROUTES: RouteItem[] = [
  { id: "buy-enter-amount",     label: "Buy Crypto",     description: "Purchase crypto with card or bank" },
  { id: "receive-select-asset", label: "Receive",        description: "Receive from a Stellar wallet" },
];

export const SEND_TYPES: RouteItem[] = [
  { id: "send-enter-address",  label: "Wallet Address", description: "Send to an address or ENS" },
  { id: "send-select-contact", label: "Contact",        description: "Send to a saved contact" },
  { id: "send-scan-qr",        label: "Scan QR",        description: "Scan a QR code" },
];

export const SETTINGS_ITEMS: RouteItem[] = [
  { id: "settings-account",       label: "Account" },
  { id: "settings-security",      label: "Security" },
  { id: "settings-notifications", label: "Notifications" },
  { id: "settings-address-book",  label: "Address Book" },
  { id: "settings-disconnect",    label: "Disconnect Wallet" },
];

export const TOKENS = ["XLM", "USDC", "ETH", "BTC", "EURC"] as const;
export type TokenId = (typeof TOKENS)[number];

export function getStep(id: StepId): Step | undefined {
  return STEPS.find((s) => s.id === id);
}

export function getStepsByGroup(group: StepGroup): Step[] {
  return STEPS.filter((s) => s.group === group);
}
