// ─── Step IDs ────────────────────────────────────────────────────────────────

export type StepId =
  | "email"
  | "email-confirm"
  | "phone"
  | "phone-confirm"
  | "passkey"
  | "passkey-confirm"
  | "wallet-select"
  | "wallet-confirm";

// ─── Step definition ─────────────────────────────────────────────────────────

export interface Step {
  id: StepId;
  label: string;
  /** True = one of the three main tabs (email / phone / passkey) */
  main: boolean;
}

// ─── Social / Wallet providers ───────────────────────────────────────────────

export type SocialProvider = {
  id: string;
  name: string;
  icon: string;
};

export type Wallet = {
  id: string;
  name: string;
  icon: string;
};

// ─── Static data ─────────────────────────────────────────────────────────────

export const STEPS: Step[] = [
  { id: "email",           label: "Email",           main: true  },
  { id: "email-confirm",   label: "Confirm Email",   main: false },
  { id: "phone",           label: "Phone",           main: true  },
  { id: "phone-confirm",   label: "Confirm Phone",   main: false },
  { id: "passkey",         label: "Passkey",         main: true  },
  { id: "passkey-confirm", label: "Confirm Passkey", main: false },
  { id: "wallet-select",   label: "Select Wallet",   main: false },
  { id: "wallet-confirm",  label: "Wallet Connected",main: false },
];

export const MAIN_STEPS = STEPS.filter((s) => s.main);

/** Maps each step to its natural "next" step. */
export const STEP_NEXT: Partial<Record<StepId, StepId>> = {
  "email":         "email-confirm",
  "phone":         "phone-confirm",
  "passkey":       "passkey-confirm",
  "wallet-select": "wallet-confirm",
};

export const SOCIALS: SocialProvider[] = [
  { id: "google",    name: "Google",    icon: "google"    },
  { id: "discord",   name: "Discord",   icon: "discord"   },
  { id: "github",    name: "Github",    icon: "github"    },
  { id: "apple",     name: "Apple",     icon: "apple"     },
  { id: "farcaster", name: "Farcaster", icon: "farcaster" },
];

export const WALLETS: Wallet[] = [
  { id: "metamask",       name: "MetaMask",       icon: "metamask"       },
  { id: "coinbase-wallet",name: "Coinbase Wallet",icon: "coinbase"       },
  { id: "phantom",        name: "Phantom",        icon: "phantom"        },
  { id: "rainbow-wallet", name: "Rainbow Wallet", icon: "rainbow-wallet" },
  { id: "other-wallets",  name: "Other Wallets",  icon: "other-wallets"  },
];
