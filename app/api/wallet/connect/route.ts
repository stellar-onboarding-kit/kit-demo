import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { walletId } = await request.json();
  
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Connection rejected by user" },
      { status: 400 }
    );
  }

  const testAddress = "GBZX4364PEPQTDICMIQDZ56K4T75QZCR4NBEYKO6PDRJAHZKGUOJPCXB";
  
  return NextResponse.json({
    address: testAddress,
    walletId,
    connected: true,
  });
}
