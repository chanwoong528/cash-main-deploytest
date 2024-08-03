import React from "react";

import PointShopDetailTable from "@/app/(Components)/ItemTable/PointShopDetailTable";
import PointShopDetailProductTable from "@/app/(Components)/ItemTable/PointShopDetailProductTable";

import { getPointShopDetail } from "@/app/(http)/apis/detailApi";

async function getData({ searchParams } : { searchParams: { cateCd: string, categCd_lvl2: string, brandId: string, categCd: string, cpage: string } }) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
    categCd_lvl2: searchParams.categCd_lvl2 || null,
  };
  const pointDetailData = await getPointShopDetail(searchParams.categCd_lvl2, params);

  let pageTitle;
  switch (params.categCd){
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

  const categCd_lvl2_List = pointDetailData.pointshopList.contents.map((el:{ brandId : string, brandName : string,categCd : string, imgLink : string, image : string})=>{
    el.image = el.imgLink;
    return el;
  })
  
  return {
    pageTitle: pageTitle,
    categCd_lvl2 : {
      totalPages: pointDetailData.pointshopList.totalPages,
      pageable: pointDetailData.pointshopList.pageable,
      contentList: categCd_lvl2_List,
    }
  };
}

const page = async ({ searchParams }: { searchParams: { cateCd: string, categCd_lvl2: string, brandId: string, categCd: string, cpage: string } }) => {
  const detailInfo = await getData({ searchParams });

  return (
    <main>
      <h3>{detailInfo.pageTitle}</h3>
      <PointShopDetailTable 
        tableData={detailInfo.categCd_lvl2}
        />
      <PointShopDetailProductTable

        />
    </main>
  );
};

export default page;
