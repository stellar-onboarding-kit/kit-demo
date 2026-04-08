import { ModalTitle } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TOKENS } from "@/types/auth";
import { useState } from "react";

interface SwapMainProps {
  sellAsset: string;
  buyAsset: string;
  amount: string;
  onSwap: (sellAsset: string, buyAsset: string, amount: string) => void;
}

export default function SwapMain({ sellAsset, buyAsset, amount, onSwap }: SwapMainProps) {
  const [fromToken, setFromToken] = useState(sellAsset);
  const [toToken, setToToken] = useState(buyAsset);
  const [swapAmount, setSwapAmount] = useState(amount);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const handleSwap = () => {
    onSwap(fromToken, toToken, swapAmount);
  };

  const handleReverseTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
  };

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Swap</ModalTitle>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-(--ck-body-color-muted)">From</label>
          <div className="relative">
            <button
              onClick={() => {
                setShowFromDropdown(!showFromDropdown);
                setShowToDropdown(false);
              }}
              className="flex w-full items-center justify-between rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
            >
              <span className="font-medium text-(--ck-body-color)">{fromToken}</span>
              <span className="text-(--ck-body-color-muted)">▼</span>
            </button>
            {showFromDropdown && (
              <div className="absolute z-10 mt-2 w-full rounded-2xl bg-(--ck-body-background) border border-(--ck-body-divider) shadow-lg">
                {TOKENS.filter(t => t !== toToken).map((token) => (
                  <button
                    key={token}
                    onClick={() => {
                      setFromToken(token);
                      setShowFromDropdown(false);
                    }}
                    className="flex w-full items-center p-4 text-left transition-colors hover:bg-(--ck-body-background-secondary,#f6f7f9)"
                  >
                    <span className="font-medium text-(--ck-body-color)">{token}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleReverseTokens}
            className="rounded-full bg-(--ck-body-background-secondary,#f6f7f9) p-2 transition-transform hover:scale-110"
          >
            <span className="text-xl">⇅</span>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-(--ck-body-color-muted)">To</label>
          <div className="relative">
            <button
              onClick={() => {
                setShowToDropdown(!showToDropdown);
                setShowFromDropdown(false);
              }}
              className="flex w-full items-center justify-between rounded-2xl bg-(--ck-body-background-secondary,#f6f7f9) p-4 text-left transition-colors hover:opacity-80"
            >
              <span className="font-medium text-(--ck-body-color)">{toToken}</span>
              <span className="text-(--ck-body-color-muted)">▼</span>
            </button>
            {showToDropdown && (
              <div className="absolute z-10 mt-2 w-full rounded-2xl bg-(--ck-body-background) border border-(--ck-body-divider) shadow-lg">
                {TOKENS.filter(t => t !== fromToken).map((token) => (
                  <button
                    key={token}
                    onClick={() => {
                      setToToken(token);
                      setShowToDropdown(false);
                    }}
                    className="flex w-full items-center p-4 text-left transition-colors hover:bg-(--ck-body-background-secondary,#f6f7f9)"
                  >
                    <span className="font-medium text-(--ck-body-color)">{token}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-(--ck-body-color-muted)">Amount</label>
          <Input
            type="number"
            placeholder="0.00"
            value={swapAmount}
            onChange={(e) => setSwapAmount(e.target.value)}
          />
        </div>
      </div>

      <Button 
        onClick={handleSwap} 
        disabled={!swapAmount || Number(swapAmount) <= 0 || fromToken === toToken} 
        className="w-full"
      >
        Review Swap
      </Button>
    </div>
  );
}
