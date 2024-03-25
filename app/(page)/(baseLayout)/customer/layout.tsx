import React from "react";

import MobileSubHeader from "@/app/(Components)/MobileSubHeader";
import CustomerSideNav from "@/app/(Components)/CustomerSideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-customer">
      <MobileSubHeader />
      <CustomerSideNav />
      {children}
    </main>
  );
}
