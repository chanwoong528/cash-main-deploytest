//@ts-nocheck
"use client";
import React from "react";
import PaginationDefault from "../Pagination/PaginationDefault";

import "../../../styles/components/PointShopDetailTable.scss";

const paginationData = {
  pageNumber: 0,
  pageSize: 10,
  paged: 0,
  unpaged: 1,
};

const PointShopDetailTable = ({ tableData }) => {
  return (
    <div className="ps-detail-table">
      <ul className="ps-list">
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
      </ul>
      <PaginationDefault paginationData={paginationData} />
    </div>
  );
};

export default PointShopDetailTable;
