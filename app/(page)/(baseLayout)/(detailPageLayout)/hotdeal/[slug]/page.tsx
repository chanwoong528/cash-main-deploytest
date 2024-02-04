//@ts-nocheck
import React from "react";
import { getHotdealItem, getHotdealOthers } from "@/app/(http)/apis/detailApi";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import HotdealDetail from "@/app/(Components)/Products/HotdealDetail";
import ImageWithFallback from "@/app/(Components)/ImageWithFallback";

import "../../../../../../styles/components/hotDealDetail.scss";

async function getData(productNum) {
  const [hotdealItem] = await Promise.all([getHotdealItem(productNum)]);

  return { hotdealItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  console.log(data)
  console.log(data.hotdealItem.hotdealDTO.categoryDescDTO.categCd)
  if(data){
    const categCd = data.hotdealItem.hotdealDTO.categoryDescDTO.categCd;
    console.log(categCd)
    const othersData = await getHotdealOthers(categCd);
    console.log(othersData)
  }
  
  
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
      </section>
    </>
  );
};

export default page;
