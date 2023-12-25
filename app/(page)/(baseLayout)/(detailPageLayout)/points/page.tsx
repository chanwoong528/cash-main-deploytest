//@ts-nocheck
import React from "react";

import Banner from "@/app/(Components)/Products/Banner";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import BestBrand from "@/app/(Components)/Products/BestBrand";

import { getPointShopHome } from "@/app/(http)/apis/detailApi";
import { URL } from "@/app/(util)/CATEGORY";
import "../../../../../styles/pages/points.scss";
import DefaultItemSlider from "@/app/(Components)/Slider/DefaultItemSlider";

async function getData(searchParams) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
  };
  const pointDetailData = await getPointShopHome(URL.POINT, params);

  // console.log(pointDetailData.pointshopList.PS_FOOD);
  // return {CONV
  //   subCategories: pointDetailData.categ1List,
  // }
  console.log("!! ", pointDetailData.categ2List);

  return {
    subCategories: pointDetailData.categ1List,
    itemPopulList: pointDetailData.populpointshopList,
    itemListPsConv: pointDetailData.pointshopList.PS_CONV,
    itemListPsFood: pointDetailData.pointshopList.PS_FOOD,
    itemListPsProduct: pointDetailData.pointshopList.PS_PRODUCT,
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
      <DetailPageNav pageType={URL.POINT} navList={data.subCategories} />
      <main className="points-main">
        <Banner bannerInfo={bannerInfo} />
        <article className="points-list-con">
          <DefaultItemSlider
            title={"인기브랜드"}
            itemList={data.itemPopulList}
          />

          <h3 className="points-title">상품권/쿠폰</h3>
          <ul>
            <li>
              {data.itemListPsProduct.map((item) => {
                return <div key={item.brandId}>{item.brandName}</div>;
              })}
            </li>
          </ul>
          <h3 className="points-title">편의점</h3>
          <ul>
            <li>
              {data.itemListPsFood.map((item) => {
                if (item.categCd === "CONV") {
                  return <div key={item.brandId}>{item.brandName}</div>;
                }
              })}
            </li>
          </ul>
          <h3 className="points-title">푸드</h3>
          <ul>
            <li>
              {data.itemListPsFood.map((item) => {
                if (item.categCd !== "CONV") {
                  return <div key={item.brandId}>{item.brandName}</div>;
                }
              })}
            </li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default page;
