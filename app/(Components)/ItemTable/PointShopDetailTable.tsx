//@ts-nocheck
"use client";
import React from "react";
import PaginationDefault from "../Pagination/PaginationDefault";
import PointItem from "./TableItem/PointItem";
import TableNav from "@/app/(Components)/ItemTable/TableNav"
import { FOOD_CATE } from "@/app/(util)/CATEGORY";

import "../../../styles/components/poitnShop.scss";
import "../../../styles/components/PointShopDetailTable.scss";

const PointShopDetailTable = ({ tableData }) => {
  
  let tabCurrent;
  if(tableData.categCd === 'PS_FOOD'){
    switch (tableData.categCd_lvl2){
      case 'CAFE': 
        tabCurrent = 1;
        break;
      case 'CHIKIN': 
        tabCurrent = 2;
        break;
      case 'JAPAN': 
        tabCurrent = 3;
        break;
      case 'WEST': 
        tabCurrent = 4;
        break;
      default :
        tabCurrent = 0;
        break;
    }
  }

  const linkURL = `categCd=${tableData.categCd}&level=1&categCd_lvl2=${tableData.categCd_lvl2}`
  
  return (
    <>
    
      {tableData.categCd === 'PS_FOOD' && (
        <TableNav
          navData={FOOD_CATE}
          curTab={tableData.categCd_lvl2}
          />
      )}

      <div className="ps-detail-table">
        <ul className="ps-list">
          {tableData.contentList.map((item, idx) => 
            <PointItem key={item.brandId + idx} linkURL={linkURL} itemData={item} psType={"ps-detail-item"} />
          )}
        </ul>
        <PaginationDefault
          paginationData={tableData.pageable}
          totalPages={tableData.totalPages}
          subPagination={true}
          />
      </div>
    </>
  );
};

export default PointShopDetailTable;
