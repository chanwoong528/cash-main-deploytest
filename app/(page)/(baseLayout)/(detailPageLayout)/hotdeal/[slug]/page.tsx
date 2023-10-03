//@ts-nocheck
import { getCategories, getHotdealItem } from "@/app/(http)/apis/detailApi";
import { CATE_LABEL } from "@/app/(util)/CATEGORY";
import React from "react";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";

async function getData(productNum) {
  const [subCategories, hotdealItem] = await Promise.all([
    getCategories(CATE_LABEL.HOTDEAL, 1),
    getHotdealItem(productNum),
  ]);

  return { hotdealItem, subCategories };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  
  return (
    <>
      1 <DetailPageNav navList={data.subCategories} />
      <div>fdafafafdaadfad</div>
    </>
  );
};

export default page;
