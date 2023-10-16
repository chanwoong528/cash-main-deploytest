//@ts-nocheck
import React from "react";
import Image from "next/image";

import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import HotdealCard from "@/app/(Components)/HotdealCard";

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
    subCategories: hotDealDetailData.categ1List,
    itemList: hotDealDetailData.hotdealList.contents,
  };
}

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  return (
    <>
      <DetailPageNav navList={data.subCategories} />
      <main className="hotdeal-main">
        <header className="hotdeal-banner">
          <h2>
            <Image
              src="/asset/images/hotdeal-banner.png"
              objectFit="cover"
              width={1200}
              height={240}
              alt="MD 추천 잇템!"
            />
          </h2>
        </header>
        <article className="hotdeal-list-con">
          <ul>
            {data.itemList.map((item) => {
              return <HotdealCard key={item.productNum} itemData={item} />;
            })}
          </ul>
        </article>
      </main>
    </>
  );
};

export default page;
