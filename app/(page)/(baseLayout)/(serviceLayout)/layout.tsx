import React from "react";
import ServiceSideNav from "@/app/(Components)/ServiceSideNav";
import MobileSubHeader from "@/app/(Components)/MobileSubHeader";
import ServiceTab from "@/app/(Components)/Service/ServiceTab";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="main-service">
      <MobileSubHeader />
      <ServiceSideNav />
      <ServiceTab />
      {children}
    </main>
  );
}
