"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname?.includes("/Login");

  // Don't show navigation on login page
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 pt-6 pb-4">
        <Link href="/v/admin/Accounts">
          <Button
            variant={pathname?.includes("/Accounts") ? "default" : "outline"}
            className="rounded-2xl px-6 py-2"
          >
            Accounts
          </Button>
        </Link>
        <Link href="/v/admin/volunteer-roster">
          <Button
            variant={pathname?.includes("/volunteer-roster") ? "default" : "outline"}
            className="rounded-2xl px-6 py-2"
          >
            Volunteer Roster
          </Button>
        </Link>
        <Link href="/v/admin/Invite">
          <Button
            variant={pathname?.includes("/Invite") ? "default" : "outline"}
            className="rounded-2xl px-6 py-2"
          >
            Invite
          </Button>
        </Link>
        <Link href="/v/admin/forgot-password">
          <Button
            variant={pathname?.includes("/forgot-password") ? "default" : "outline"}
            className="rounded-2xl px-6 py-2"
          >
            Forgot Password
          </Button>
        </Link>
      </div>
      
      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}


