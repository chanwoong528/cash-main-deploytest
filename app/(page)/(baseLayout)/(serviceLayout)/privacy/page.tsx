//@ts-nocheck
import React from "react";
import ServiceSideNav from "@/app/(Components)/ServiceSideNav";
import ServiceHeader from "@/app/(Components)/Service/ServiceHeader";
import ServiceTab from "@/app/(Components)/Service/ServiceTab";
import Privacy from "@/app/(Components)/Service/Privacy";

const page = async () => {
  return (
    <>
      <ServiceHeader 
        title={"개인정보처리방침"}
        />
      <ServiceSideNav />
      <ServiceTab />
      <Privacy />
    </>
  );
};

export default page;
