import { ModalTitle } from "@/components/ui/modal";

interface ReceiveSelectAssetProps {
  onSelect: () => void;
}

const ASSETS = ["XLM", "USDC", "ETH", "BTC"];

export default function ReceiveSelectAsset({ onSelect }: ReceiveSelectAssetProps) {
  return (
    <div className="flex flex-col gap-3">
      <ModalTitle>Select Asset</ModalTitle>
      {ASSETS.map((asset) => (
        <button
          key={asset}
          onClick={onSelect}
          className="flex items-center gap-3 rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left text-sm font-medium text-(--ck-body-color) transition-colors hover:opacity-80"
        >
          {asset}
        </button>
      ))}
    </div>
  );
}
