//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import BestBrandItem from "./Item/BestBrandItem";
import PointShopItem from "./Item/PointShopItem";
import HotDealItem from "./Item/HotDealItem";
import ShoppingItem from "./Item/ShoppingItem";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import "../../../styles/components/defaultSlider.scss";
import "../../../styles/components/bestBrand.scss";
import "../../../styles/components/hotdealothers.scss";

const ComponentType = ({ itemList, callPage }) => {



  if (callPage === "bestBrand") {
    return (
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        className="default-slider"
        breakpoints={{
          900: {
            slidesPerView: 5.2,
            spaceBetween: 30
          }
        }}
      >
        {itemList.map((item, idx) => {
          return (
            <SwiperSlide key={item.brandId ?? idx}>
              <BestBrandItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  }

  if (callPage === "pointShopList") {
    return (
      <Swiper
        navigation={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="default-slider"
      >
        {itemList.map((item, idx) => {
          return (
            <SwiperSlide key={item.brandId ?? idx}>
              <PointShopItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  }

  if (callPage === "hotdeal") {
    return (
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        className="default-slider"
        breakpoints={{
          900: {
            slidesPerView: 4
          }
        }}
      >
        {itemList?.map((item, idx) => {
          return (
            <SwiperSlide key={item.productNum ?? idx}>
              <HotDealItem item={item} key={item.brandId} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  }

  if (callPage === "shopping") {
    return (
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        className="default-slider shopping-slider"
        breakpoints={{
          900: {
            slidesPerView: 5
          }
        }}
      >
        {itemList?.map((item, idx) => {
          return (
            <SwiperSlide key={item.productNum ?? idx}>
              <ShoppingItem item={item} key={item.brandId} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  }
}

const DefaultItemSlider = ({ title, itemList, callPage }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <>
      {!!mounted && <div className={`defaultSlider ${callPage}`}>
        <h3>{title}</h3>
        <ComponentType itemList={itemList} callPage={callPage} />
      </div>
      }
    </>
  );
};

export default DefaultItemSlider;
