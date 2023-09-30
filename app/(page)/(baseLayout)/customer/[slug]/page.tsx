//@ts-nocheck
import React from "react";
import { getNotices } from "@/app/(http)/apis/customerApi";

async function generateStaticParams() {
  const noticeData = await getNotices();

  return noticeData.map((notice) => ({
    slug: notice.noticeList.content.idx,
  }));
}

const page = ({ params }: { params: { slug: string } }) => {
  return <div>공지사항!!</div>;
};

export default page;
