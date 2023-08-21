import React from "react";

import CustomerSideNav from "@/app/(Components)/CustomerSideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-customer">
      <CustomerSideNav />
      {children}
    </main>
  );
}
