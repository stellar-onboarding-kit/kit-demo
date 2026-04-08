import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address required" }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json({
    balances: [
      { asset: "XLM", balance: "1250.5000000", usdValue: "20.00" },
      { asset: "USDC", balance: "500.0000000", usdValue: "500.00" },
      { asset: "EURC", balance: "250.0000000", usdValue: "275.00" },
    ],
  });
}
