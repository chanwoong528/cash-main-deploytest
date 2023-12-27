//@ts-nocheck
import React from "react";

import Banner from "@/app/(Components)/Products/Banner";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import PaginationDefault from "@/app/(Components)/Pagination/PaginationDefault";
import HotDealItem from "@/app/(Components)/ItemTable/TableItem/HotDealItem";

import { getDetailList } from "@/app/(http)/apis/detailApi";
import { URL } from "@/app/(util)/CATEGORY";

import "../../../../../styles/pages/hotDeal.scss";

async function getData(searchParams) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
  };
  const hotDealDetailData = await getDetailList(URL.HOTDEAL, params);
  return {
    subCategories: hotDealDetailData?.categ1List,
    itemList: hotDealDetailData.hotdealList?.contents,
    paginationData: hotDealDetailData.hotdealList?.pageable,
  };
}
const bannerInfo = {
  url: "/asset/images/hotdeal-banner.png",
  alt: "MD 추천 잇템!",
};

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);

  return (
    <>
      <DetailPageNav pageType={URL.HOTDEAL} navList={data.subCategories} />
      <main className="hotdeal-main">
        <Banner bannerInfo={bannerInfo} />
        <article className="hotdeal-list-con">
          <ul>
            {data.itemList.map((item) => {
              return <HotDealItem key={item.productNum} itemData={item} />;
              // <HotdealCard key={item.productNum} itemData={item} />;
            })}
          </ul>
          <PaginationDefault paginationData={data.paginationData} />
        </article>
      </main>
    </>
  );
};

export default page;
