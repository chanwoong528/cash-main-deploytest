//@ts-nocheck
import React from "react";

import PointShopDetailTable from "@/app/(Components)/ItemTable/PointShopDetailTable";
import PointShopDetailProductTable from "@/app/(Components)/ItemTable/PointShopDetailProductTable";

import { getPointShopDetail, getDetailList } from "@/app/(http)/apis/detailApi";

async function getData({ searchParams } : { searchParams: { cateCd: string, level: string, categCd_lvl2: string, brandId: string, categCd: string, cpage: string, subCpage: string } }) {
  let itemParams = {
    categCd: searchParams.categCd || null,
    level: searchParams.level || null,
    brandId: searchParams.brandId || null,
    cpage: searchParams.cpage || 1,
    size:12
  }

  const pointDetailData = searchParams.categCd === 'PS_FOOD' && searchParams.categCd_lvl2 !== 'ALL' ? 
    await getPointShopDetail(searchParams.categCd_lvl2, 'lvl2', {size: 10, cpage: searchParams.subCpage})
    : await getPointShopDetail(searchParams.categCd, 'lvl1', {size: 10, cpage: searchParams.subCpage})
  
  const pointDetailBrandData = await getDetailList('/pointshop/item', itemParams);
  
  let pageTitle;
  switch (searchParams.categCd){
    case 'PS_PRODUCT': 
      pageTitle = "상품권/쿠폰";
      break;
    case 'PS_FOOD': 
      pageTitle = "Food";
      break;
    case 'PS_CONV': 
      pageTitle = "편의점";
      break;
    default :
      pageTitle = '';
      break;
  }

  const categCd_lvl2_List = pointDetailData.pointshopList?.contents.map((el:{ brandId : string, brandName : string,categCd : string, imgLink : string, image : string})=>{
    el.image = el.imgLink;
    return el;
  })

  return {
    pageTitle: pageTitle,
    categCd_lvl2 : {
      categCd: searchParams.categCd,
      categCd_lvl2: searchParams.categCd_lvl2,
      totalPages: pointDetailData.pointshopList.totalPages,
      pageable: pointDetailData.pointshopList.pageable,
      contentList: categCd_lvl2_List,
    },
    brandItem : {
      categCd: searchParams.categCd,
      totalPages: pointDetailBrandData.pointshopItemList.totalPages,
      pageable: pointDetailBrandData.pointshopItemList.pageable,
      contentList: pointDetailBrandData.pointshopItemList.contents
    }
  };
}

const page = async ({ searchParams }: { searchParams: { cateCd: string, level: string, categCd_lvl2: string, brandId: string, categCd: string, cpage: string, foodTab: string, subCpage: string } }) => {
  const detailInfo = await getData({ searchParams });

  return (
    <main>
      <header className="ps-detail-header">
        <h3>{detailInfo.pageTitle}</h3>
      </header>

      <PointShopDetailTable 
        tableData={detailInfo.categCd_lvl2}
        />
      <PointShopDetailProductTable
        tableData={detailInfo.brandItem}
        />
    </main>
  );
};

export default page;
