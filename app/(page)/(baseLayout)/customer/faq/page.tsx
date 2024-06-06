//@ts-nocheck
import React from "react";
import { getFaqs } from "@/app/(http)/apis/customerApi";
import { FAQ_LIST_TYPE } from "@/app/(util)/CATEGORY";
import FaqTable from "@/app/(Components)/ItemTable/FaqTable";
import PaginationDefault from "@/app/(Components)/Pagination/PaginationDefault";
import Link from "next/link";

import "../../../../../styles/components/faq.scss";

async function getData(prop) {
  const faqsData = await getFaqs(prop);

  return faqsData;
}

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  return (
    <section className="main-customer-section faq">
      <h3>FAQ</h3>
      {/* <FaqNav /> */}
      <article className="faq-nav">
        <div>
          {
            FAQ_LIST_TYPE.map((item) => {
              return (
                <Link key={item.gubun} href={`/customer/faq?gubun=${item.gubun}`} className={`${item.gubun === searchParams.gubun ? "on" : ""}`}>{item.title}</Link>
              )
            })
          }
        </div>
      </article>
      <FaqTable
        itemList={data.faqList.content}
      />
      <PaginationDefault paginationData={data.faqList.pageable} />
    </section>
  )
}

export default page;
