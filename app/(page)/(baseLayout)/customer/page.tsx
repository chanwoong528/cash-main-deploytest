//@ts-nocheck
import React from "react";
import { getNotices } from "@/app/(http)/customerApi";

async function getData() {
  const noticeData = await getNotices();

  return noticeData.noticeList.content;
}

const page = async () => {
  const data = await getData();

  return (
    <section className="main-customer-section">
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
        <tbody>
          {data.map((noticeItem) => {
            return (
              <tr>
                <th scope="col">
                  <a href="">{noticeItem.idx}</a>
                </th>
                <th scope="col">
                  <a href="">{noticeItem.title}</a>
                </th>
                <th scope="col">
                  <a href="">{noticeItem.createDate.slice(0, 10)}</a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default page;
