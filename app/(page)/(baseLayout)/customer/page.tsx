//@ts-nocheck
import React from "react";
import { getNotices } from "@/app/(http)/apis/customerApi";
import Link from "next/link";

import "../../../../styles/components/notice.scss";

async function getData() {
  const noticeData = await getNotices();

  return noticeData.noticeList.content;
}

const page = async () => {
  const data = await getData();

  return (
    <section className="main-customer-section notice">
      <h3>공지사항</h3>
      <table>
        <colgroup>
          <col className="col-no" />
          <col className="col-title" />
          <col className="col-date" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
          </tr>
        </thead>
        <tbody className="notice-item">
          {data.map((noticeItem) => {
            return (
              <tr key={noticeItem.idx}>
                <td scope="col">
                  <Link href={`/customer/${noticeItem.idx}`}>{noticeItem.idx}</Link>
                </td>
                <td scope="col" className="title">
                  <Link href={`/customer/${noticeItem.idx}`}>{noticeItem.title}</Link>
                </td>
                <td scope="col">
                  <Link href={`/customer/${noticeItem.idx}`}>{noticeItem.createDate.slice(0, 10)}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default page;
