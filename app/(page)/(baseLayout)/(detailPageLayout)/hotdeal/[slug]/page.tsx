//@ts-nocheck
import { getCategories, getHotdealItem } from "@/app/(http)/apis/detailApi";
import { CATE_LABEL } from "@/app/(util)/CATEGORY";
import React from "react";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import ImageWithFallback from "@/app/(Components)/ImageWithFallback";

async function getData(productNum) {
  const [hotdealItem] = await Promise.all([getHotdealItem(productNum)]);

  return { hotdealItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);

  return (

    <>
      <DetailPageNav navList={data.hotdealItem.categ1List} />
      <section>
        <figure>
          <ImageWithFallback
            src={data.hotdealItem.hotdealDTO?.image}
            width={450}
            height={450}
            objectFit="contain"
            alt={data.hotdealItem.hotdealDTO?.name}
          />
        </figure>
        <header>
          <h2>{data.hotdealItem.hotdealDTO?.name}</h2>
          <div>
            <div>
              <p>{data.hotdealItem.hotdealDTO?.sale}%</p>
              <p>{data.hotdealItem.hotdealDTO?.price}원</p>
            </div>
            <p>{data.hotdealItem.hotdealDTO?.listPrice}원</p>
          </div>
        </header>
        <button>구매하기</button>
        <article>
          <h3>상세정보</h3>
          <div>
            <h4>상품안내</h4>
            <h4>상품상세정보</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data.hotdealItem.hotdealDTO?.detailInfo,
              }}
            ></div>
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
