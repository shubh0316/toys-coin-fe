"use client";

import { Toaster } from "sonner";
import Image from "next/image";
import { ReactNode } from "react";
import logo_foundation from "@/assets/foster_foundation.png";


export default function Layout({ children }: { children: ReactNode }) {
  return (

      <div className="min-h-screen bg-[#F9EFE0] flex flex-col justify-around items-center">
        <div className="py-6">
          <Image src={logo_foundation} alt="Foundation Logo" width={450} height={50} />
        </div>
        <main className="w-full max-w-4xl flex-1">{children}</main>
        <Toaster position="top-right" />
      </div>

  );
}
