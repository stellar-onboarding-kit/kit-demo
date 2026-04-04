"use client";

import { StepId } from "@/types/auth";
import { EmailStep } from "./EmailStep";
import { EmailConfirmStep } from "./EmailConfirmStep";
import { PhoneStep } from "./PhoneStep";
import { PhoneConfirmStep } from "./PhoneConfirmStep";
import { PasskeyStep } from "./PasskeyStep";
import { PasskeyConfirmStep } from "./PasskeyConfirmStep";
import { WalletStep, WalletConfirmStep } from "./WalletStep";

export const StepRenderer: React.FC<{ id: StepId; onNext: () => void }> = ({ id, onNext }) => {
  switch (id) {
    case "email":           return <EmailStep onNext={onNext} />;
    case "email-confirm":   return <EmailConfirmStep />;
    case "phone":           return <PhoneStep onNext={onNext} />;
    case "phone-confirm":   return <PhoneConfirmStep />;
    case "passkey":         return <PasskeyStep onNext={onNext} />;
    case "passkey-confirm": return <PasskeyConfirmStep />;
    case "wallet-select":   return <WalletStep onNext={onNext} />;
    case "wallet-confirm":  return <WalletConfirmStep />;
    default:                return null;
  }
};
