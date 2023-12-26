//@ts-nocheck
"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../../styles/components/bestBrand.scss";
import PointShopItem from "./Item/PointShopItem";

const DefaultItemSlider = ({ title, itemList }) => {
  return (
    <div className="best-brand">
      <h3>{title}</h3>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        className="default-slider"
      >
        {itemList.map((item) => {
          return (
            <SwiperSlide key={item.brandId}>
              <PointShopItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <ul> */}

      {/* </ul> */}
    </div>
  );
};

export default DefaultItemSlider;
