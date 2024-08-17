//@ts-nocheck
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PaginationDefault from "../Pagination/PaginationDefault";
import PointItem from "./TableItem/PointItem";
import TableNav from "@/app/(Components)/ItemTable/TableNav"
import { FOOD_CATE } from "@/app/(util)/CATEGORY";

import "../../../styles/components/poitnShop.scss";
import "../../../styles/components/PointShopDetailTable.scss";



const PointShopDetailTable = ({ tableData }) => {
  const router = useRouter();

  let tabCurrent;
  if(tableData.categCd === 'PS_FOOD'){
    tabCurrent = tableData.categCd_lvl2 !== 'ALL' ? tableData.categCd_lvl2 : '';
  }

  const linkURL = `categCd=${tableData.categCd}&level=1&categCd_lvl2=${tableData.categCd_lvl2}`
  
  const onClickNavItem = (clickItem) => {
    const lvl2 = clickItem.categCd === '' ? 'ALL' : clickItem.categCd;
    router.push(`/points/point_detail?categCd=${tableData.categCd}&level=1&categCd_lvl2=${lvl2}`);
  }

  return (
    <>
      {tableData.categCd === 'PS_FOOD' && (
        <TableNav
          navData={FOOD_CATE}
          onClickNavItem={onClickNavItem}
          curTab={tabCurrent}
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
