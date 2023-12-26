//@ts-nocheck
import type { Metadata } from "next";

import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import { URL } from "@/app/(util)/CATEGORY";
// import { getNavCategory } from "@/app/(http)/apis/navCategory";
import { getPointShopHome } from "@/app/(http)/apis/detailApi";

export const metadata: Metadata = {
  title: "sub point shop page",
  description: "Generated by create next app",
};

async function getData() {
  // const psNavData = await getNavCategory(CATE_LABEL.POINT, 1);-> home 이없음
  const psNavData = await getPointShopHome(URL.POINT);
  return { navList: psNavData.categ1List };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <>
      <DetailPageNav pageType={URL.POINT} navList={data.navList} />
      {children}
    </>
  );
}
