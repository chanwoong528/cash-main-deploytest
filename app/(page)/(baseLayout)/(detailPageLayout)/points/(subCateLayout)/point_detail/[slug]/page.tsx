//@ts-nocheck
import React from "react";

import { getPointShopView } from "@/app/(http)/apis/detailApi";
import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";
import ImageWithFallback from "@/app/(Components)/ImageWithFallback";
import { URL } from "@/app/(util)/CATEGORY";

import "../../../../../../../../styles/components/poitnShop.scss";
import "../../../../../../../../styles/components/poitnShopDetail.scss";

async function getData(goodsId ) {
  const pointshopItem = await getPointShopView(goodsId);

  return { pointshopItem };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  if(data){
    if(data.pointshopItem === undefined){
      return false;
    }
  }
  
  return (
    <>
      <section className="pointshop-detail">
        <figure>
          <ImageWithFallback
            src={data.pointshopItem.pointshopItemDTO?.imgUrl}
            width={450}
            height={450}
            objectFit="contain"
            alt={data.pointshopItem.pointshopItemDTO?.goodsName}
          />
        </figure>
        <header>
          <div class="point-simple">
            <h5>{data.pointshopItem.pointshopItemDTO?.brandName}</h5>
            <div class="point-simple-txt">
              <h3 class="title">{data.pointshopItem.pointshopItemDTO?.goodsName}</h3>
              <div class="point-price">
                <div></div>
                <h3>{data.pointshopItem.pointshopItemDTO?.price}<span>원</span></h3>
              </div>
            </div>
            <div class="point-info">
              <p>유효기간</p>
              <p>{data.pointshopItem.pointshopItemDTO?.exdate}일(발송일 포함)</p>
            </div>
            <span><br />※포인트 적립을 5,000원 이상 하시면 포인트샵 이용 제한이 해제 됩니다.</span>
            <button class="point-btn">구매하기</button>
          </div>
        </header>
        <div class="point-detail">
          <h3>상품 이용안내</h3>
          <div class="point-detail-txt">
            {data.pointshopItem.pointshopItemDTO?.brandMemo}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default page;
