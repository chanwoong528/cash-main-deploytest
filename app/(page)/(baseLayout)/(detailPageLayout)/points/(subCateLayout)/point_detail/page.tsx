import React from "react";

import PointShopDetailTable from "@/app/(Components)/ItemTable/PointShopDetailTable";
import PointShopDetailProductTable from "@/app/(Components)/ItemTable/PointShopDetailProductTable";

import { getPointShopHome } from "@/app/(http)/apis/detailApi";

async function getData({ searchParams } : { searchParams : { cateCd : string, categCd_lvl2 : string, brandId : string }}) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
  };
  const pointDetailData = await getPointShopHome(URL.POINT, params);

  return {
    subCategories: pointDetailData.categ1List,
    itemPopulList: pointDetailData.populpointshopList,
    itemListPsConv: pointDetailData.pointshopList.PS_CONV,
    itemListPsFood: pointDetailData.pointshopList.PS_FOOD,
    itemListPsProduct: pointDetailData.pointshopList.PS_PRODUCT,
    foodNavList: pointDetailData.categ2List.PS_FOOD,
  };
}

const page = ({ searchParams } : { searchParams : { cateCd : string, categCd_lvl2 : string, brandId : string }}) => {
  getData(searchParams)
  return (
    <main>
      <h3>상품권/쿠폰</h3>
      <PointShopDetailTable />
      <PointShopDetailProductTable />
    </main>
  );
};

export default page;
