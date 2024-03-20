//@ts-nocheck
import React from "react";
import ServiceSideNav from "@/app/(Components)/ServiceSideNav";
import ServiceHeader from "@/app/(Components)/Service/ServiceHeader";
import ServiceTab from "@/app/(Components)/Service/ServiceTab";
import Terms from "@/app/(Components)/Service/Terms";

const page = async () => {
  return (
    <>
      <ServiceHeader 
        // title={"개인정보처리방침"}
        title={"이용약관"}
        />
      <ServiceSideNav />
      <ServiceTab />
      <Terms />
    </>
  );
};

export default page;
