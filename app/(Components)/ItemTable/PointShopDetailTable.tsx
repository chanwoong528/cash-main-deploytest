//@ts-nocheck
"use client";
import React from "react";
import PaginationDefault from "../Pagination/PaginationDefault";
import PointItem from "./TableItem/PointItem";

import "../../../styles/components/PointShopDetailTable.scss";

const paginationData = {
  pageNumber: 0,
  pageSize: 10,
  paged: 0,
  unpaged: 1,
};

const demoPsData = [
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },
  {
    brandId: "123",
    image: "not.jpg",
    brandName: "준비중입니다.",
  },

]

const PointShopDetailTable = ({ tableData }) => {
  return (
    <div className="ps-detail-table">
      <ul className="ps-list">
        {demoPsData.map((item, idx) =>
          <PointItem key={item.brandId + idx} itemData={item} psType={"ps-detail-item"} />
        )}
      </ul>
      <PaginationDefault paginationData={paginationData} />
    </div>
  );
};

export default PointShopDetailTable;
