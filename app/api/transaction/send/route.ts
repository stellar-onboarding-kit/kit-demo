import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { destination, amount, asset } = await request.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (Math.random() < 0.15) {
    return NextResponse.json(
      { error: "Transaction failed: insufficient balance" },
      { status: 400 }
    );
  }

  const txHash = `${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;

  return NextResponse.json({
    hash: txHash,
    successful: true,
    destination,
    amount,
    asset,
  });
}
