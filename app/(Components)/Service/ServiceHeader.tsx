"use client";
import React from "react";
import { useRouter } from "next/navigation";

import "../../../styles/components/serviceHeader.scss";

const ServiceHeader = ({ title }: { title : string}) => {
  const router = useRouter();

  return (
    <header className="serviceHeader">
      <button onClick={router.back}>BackBtn</button>
      <h2>{title}</h2>
    </header>
  );
};

export default ServiceHeader;
