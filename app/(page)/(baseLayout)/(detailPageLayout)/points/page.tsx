//@ts-nocheck
import React from "react";

import Banner from "@/app/(Components)/Products/Banner";

import DefaultItemSlider from "@/app/(Components)/Slider/DefaultItemSlider";
import PointShopTable from "@/app/(Components)/ItemTable/PointShopTable";

import { getPointShopHome } from "@/app/(http)/apis/detailApi";

import { POINTSHOP_LIST_TYPE, URL } from "@/app/(util)/CATEGORY";

import "../../../../../styles/pages/points.scss";

async function getData(searchParams) {
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
const bannerInfo = {
  url: "/asset/images/pointshop-banner.png",
  alt: "MD 추천 잇템!",
};

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);

  return (
    <>
      <main className="points-main">
        <Banner bannerInfo={bannerInfo} />
        <article className="points-list-con">
          <DefaultItemSlider
            callPage={"bestBrand"}
            title={"인기브랜드"}
            itemList={data.itemPopulList}
          />
          <div className="pointshop-table-wrap">
            <PointShopTable title="상품권/쿠폰" data={data.itemListPsProduct} />
          </div>
          <div className="pointshop-table-wrap bg-g">
            <PointShopTable title="편의점" data={data.itemListPsConv} />
          </div>
          <div className="pointshop-table-wrap">
            <PointShopTable
              type={POINTSHOP_LIST_TYPE.WITH_NAV}
              title="푸드"
              data={data.itemListPsFood}
              navData={data.foodNavList}
            />
          </div>
        </article>
      </main>
    </>
  );
};

export default page;
