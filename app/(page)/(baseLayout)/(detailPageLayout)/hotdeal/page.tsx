//@ts-nocheck
import React from "react";
import Image from "next/image";

import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import HotdealCard from "@/app/(Components)/HotdealCard";

import { getCategories, getDetailList } from "@/app/(http)/apis/detailApi";
import { CATE_LABEL, URL } from "@/app/(util)/CATEGORY";
import "../../../../../styles/pages/hotDeal.scss";

async function getData(searchParams) {
  console.log(searchParams);
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
  };
  const [subCategories, itemList] = await Promise.all([
    getCategories(CATE_LABEL.HOTDEAL, 1),
    getDetailList(URL.HOTDEAL, params),
  ]);

  return { subCategories, itemList };
}

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  console.log(data.itemList);
  return (
    <>
      <DetailPageNav navList={data.subCategories} />
      <main className="hotdeal-main">
        <header className="hotdeal-banner">
          <h2>
            <Image
              src="/asset/images/hotdeal-banner.png"
              objectFit="contain"
              width={1920}
              height={240}
              alt="MD 추천 잇템!"
            />
          </h2>
        </header>
        <article className="hotdeal-list-con">
          <ul>
            {data.itemList.hotdealList.map((item) => {
              return <HotdealCard itemData={item} />;
            })}
          </ul>
        </article>
      </main>
    </>
  );
};

export default page;
