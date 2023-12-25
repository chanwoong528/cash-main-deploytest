//@ts-nocheck
"use client";
import React from "react";
import ImageWithFallback from "../ImageWithFallback";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../../styles/components/bestBrand.scss";

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
              <Link href={""}>
                <div className="default-slider-card">
                  <ImageWithFallback
                    src={item.imgLink}
                    width={207}
                    height={110}
                    objectFit="contain"
                    alt={item.brandName}
                  />
                  <p className="brand-title">{item.brandName}</p>
                </div>
              </Link>
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
