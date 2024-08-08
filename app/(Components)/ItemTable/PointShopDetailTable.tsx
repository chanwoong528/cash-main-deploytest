//@ts-nocheck
"use client";
import React from "react";
import PaginationDefault from "../Pagination/PaginationDefault";
import PointItem from "./TableItem/PointItem";

import "../../../styles/components/PointShopDetailTable.scss";

const PointShopDetailTable = ({ tableData }) => {
  return (
    <div className="ps-detail-table">
      <ul className="ps-list">
        {tableData.contentList.map((item, idx) => 
          <PointItem key={item.brandId + idx} itemData={item} psType={"ps-detail-item"} />
        )}
      </ul>
      <PaginationDefault
        paginationData={tableData.pageable}
        totalPages={tableData.totalPages}
        />
    </div>
  );
};

export default PointShopDetailTable;
