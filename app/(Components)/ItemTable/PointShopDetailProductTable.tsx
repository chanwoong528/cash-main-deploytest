//@ts-nocheck
"use client";
import React from 'react'
import PaginationDefault from '../Pagination/PaginationDefault';
import PointProduct from './TableItem/PointProduct';

import "../../../styles/components/PointShopDetailProductTable.scss";

const PointShopDetailProductTable = ({ tableData }) => {
  return (
    <div className="ps-detail-product-table">
      <ul className="ps-list">
        {tableData.contentList.map((item, idx) =>
          <PointProduct key={item.brandId + idx} categCd={tableData.categCd} itemData={item} psType={"ps-detail-item"} />
        )}
      </ul>
      <PaginationDefault
        paginationData={tableData.pageable}
        totalPages={tableData.totalPages}
        />
    </div>
  )
}

export default PointShopDetailProductTable