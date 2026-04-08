import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { sellAsset, buyAsset, amount } = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 3500));

  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Swap failed: insufficient liquidity" },
      { status: 400 }
    );
  }

  const txHash = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
  const received = (Number(amount) * 0.98).toFixed(7);

  return NextResponse.json({
    hash: txHash,
    successful: true,
    sellAsset,
    buyAsset,
    amountSent: amount,
    amountReceived: received,
  });
}
