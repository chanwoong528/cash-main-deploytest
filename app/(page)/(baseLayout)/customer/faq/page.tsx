import React from "react";
import TableNav from "@/app/(Components)/ItemTable/TableNav";

const page = () => {
  return (
    <section className="main-customer-section">
      <h3>FAQ</h3>
      {/* <TableNav /> */}

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
        {/* <tbody>
          {data.map((noticeItem) => {
            return (
              <tr key={noticeItem.idx}>
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
        </tbody> */}
      </table>
    </section>
  );
};

export default page;
