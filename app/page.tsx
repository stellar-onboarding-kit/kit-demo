"use client";

import { SignInModal } from "@/components/auth/modal/SignInModal";
import { SignInModalTrigger } from "@/components/auth/modal/SignInModalTrigger";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <SignInModalTrigger>
        <button className="rounded-full min-h-[40px] px-4 font-medium text-white bg-blue-500 hover:bg-blue-600/80 flex items-center justify-center transition-colors disabled:pointer-events-none disabled:opacity-50">
          Sign in
        </button>
      </SignInModalTrigger>
      <SignInModal />
    </main>
  );
}
