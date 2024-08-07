//@ts-nocheck
"use client";
import React from 'react'
import PaginationDefault from '../Pagination/PaginationDefault';
import PointProduct from './TableItem/PointProduct';

import "../../../styles/components/PointShopDetailProductTable.scss";

const paginationData = {
  pageNumber: 0,
  pageSize: 10,
  paged: 0,
  unpaged: 1,
};
const PointShopDetailProductTable = ({ tableData }) => {
  return (
    <div className="ps-detail-product-table">
      <ul className="ps-list">
        {tableData.contentList.map((item, idx) =>
          <PointProduct key={item.brandId + idx} itemData={item} psType={"ps-detail-item"} />
        )}
      </ul>
      <PaginationDefault
        paginationData={paginationData}
        totalPages={1}
        />
    </div>
  )
}

export default PointShopDetailProductTable