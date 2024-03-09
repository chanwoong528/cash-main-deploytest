//@ts-nocheck
import React from "react";
import { getHotdealItem, getHotdealOthers } from "@/app/(http)/apis/detailApi";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import HotdealDetail from "@/app/(Components)/Products/HotdealDetail";
import ImageWithFallback from "@/app/(Components)/ImageWithFallback";
import DefaultItemSlider from "@/app/(Components)/Slider/DefaultItemSlider";
import { URL } from "@/app/(util)/CATEGORY";

import "../../../../../../styles/components/hotDealDetail.scss";

async function getData(productNum) {
  const [hotdealItem] = await Promise.all([getHotdealItem(productNum)]);

  return { hotdealItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  if(data){
    if(data.hotdealItem.hotdealDTO === undefined){
      return false;
    }

    const categCd = data.hotdealItem.hotdealDTO.categoryDescDTO.categCd;
    const othersData = await getHotdealOthers(categCd);
    data.hotdealItem.othersData = othersData;
  }
  
  if(data.hotdealItem === null){
    data.hotdealItem.categ1List = [];
  }

  return (
    <>
      <DetailPageNav pageType={URL.HOTDEAL} navList={data.hotdealItem.categ1List} />
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
          <div>
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
          </div>
          <button className="btn-primary">구매하기</button>
        </header>
        <HotdealDetail detailInfo={data.hotdealItem.hotdealDTO?.detailInfo} />

        <DefaultItemSlider
            callPage={"hotdeal"}
            title={"관련된 다른상품"}
            itemList={data.hotdealItem.othersData}
          />
      </section>
    </>
  );
};

export default page;
