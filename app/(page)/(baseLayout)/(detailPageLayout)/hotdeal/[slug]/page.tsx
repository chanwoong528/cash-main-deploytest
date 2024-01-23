//@ts-nocheck
// "use client";
// import React, { useState } from "react";
import React from "react";
import { getCategories, getHotdealItem } from "@/app/(http)/apis/detailApi";
import { CATE_LABEL } from "@/app/(util)/CATEGORY";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import ImageWithFallback from "@/app/(Components)/ImageWithFallback";

import "../../../../../../styles/components/hotDealDetail.scss";

async function getData(productNum) {
  const [hotdealItem] = await Promise.all([getHotdealItem(productNum)]);

  return { hotdealItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  // const [showPrdInfomation, setShowPrdInfomation] = useState(false); // product moreInfomation
  const data = await getData(params.slug);
  console.log(data.hotdealItem);
  
  if(data.hotdealItem === null){
    data.hotdealItem.categ1List = [];
  }

  return (
    <>
      <DetailPageNav navList={data.hotdealItem.categ1List} />
      <section className="hotdeal-detail">
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
          <div className="price-box">
            <div>
              {data.hotdealItem.hotdealDTO?.sale && (
                <p className="percent"><em>{data.hotdealItem.hotdealDTO?.sale}</em>%</p>
              )}
              <p className="price-current"><em>{data.hotdealItem.hotdealDTO?.price}</em>원</p>
            </div>
            {data.hotdealItem.hotdealDTO?.listPrice && (
              <p className="price-org"><del>{data.hotdealItem.hotdealDTO.listPrice}</del>원</p>
            )}
          </div>
        </header>
        <button className="btn-primary">구매하기</button>
        <article className="prd-detail">
          <h3>상세정보</h3>
          <div>
            {/* <h4>상품안내</h4>
            <h4>상품상세정보</h4> */}
            <div
              dangerouslySetInnerHTML={{
                __html: data.hotdealItem.hotdealDTO?.detailInfo,
              }}
              className="prd-img hidden"
            ></div>
            <div class="btn_wrap">
              <button 
                type="button"
                >
                  자세히보기
                </button>
            </div>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: data.hotdealItem.hotdealDTO?.detailInfo,
              }}
              className={"prd-img" + (showPrdInfomation ? '' : ' hidden') }
            ></div>
            {showPrdInfomation && (
              <div class="btn_wrap">
                <button 
                  type="button"
                  onClick={setShowPrdInfomation(true)}
                  >
                    자세히보기
                  </button>
              </div>
            )} */}
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
