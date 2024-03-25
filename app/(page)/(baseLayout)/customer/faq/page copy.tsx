//@ts-nocheck
"use client";

import React from "react";
import TableNav from "@/app/(Components)/ItemTable/TableNav";
import FaqTable from "@/app/(Components)/ItemTable/FaqTable";

import { FAQ_LIST_TYPE } from "@/app/(util)/CATEGORY";

const page = () => {
  // const params = useSearchParams();
  // const gubun = params.get('gubun');

  // const apiParams = params.get('cpage') !== null ? {
  //   gubun : gubun,
  //   cpage : params.get('cpage')
  // } : {
  //   gubun : gubun
  // }

  const apiParams = {test : 'test'}
  console.log(apiParams)
  const navData = FAQ_LIST_TYPE;

  return (
    <section className="main-customer-section faq">
      <h3>FAQ</h3>
{/* 
      <TableNav
        navData={navData}
      />
       */}
       
      <FaqTable 
        apiParams={apiParams}
        />
    </section>
  );
};

export default page;
