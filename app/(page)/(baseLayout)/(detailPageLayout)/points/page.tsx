//@ts-nocheck
import React from "react";
import Image from "next/image";

import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";

import { getPointShopHome } from "@/app/(http)/apis/detailApi";
import "../../../../../styles/pages/hotDeal.scss";

async function getData() {
  // const hotDealDetailData = await getDetailList(URL.HOTDEAL, params);
  const getPointshopData = await getPointShopHome();

  return { subCategories: getPointshopData.categ1List };
}

const page = async () => {
  const data = await getData();
  return (
    <>
      <DetailPageNav navList={data.subCategories} />
      <main className="hotdeal-main">
        <header className="hotdeal-banner">
          <h2>
            <Image
              src="/asset/images/pointshop-banner.png"
              objectFit="cover"
              width={1200}
              height={240}
              alt="MD 추천 잇템!"
            />
          </h2>
        </header>
        <article className="hotdeal-list-con"></article>
      </main>
    </>
  );
};

export default page;
