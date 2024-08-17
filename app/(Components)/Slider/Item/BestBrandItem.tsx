//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "../../ImageWithFallback";

// import "../../../../styles/components/bestBrand.scss";

const BestBrandItem = ({ item }) => {
  let linkURL = '';
  if(item.categCd === 'CONV'){
    linkURL = `/points/point_detail?categCd=PS_CONV&level=1&brandId=${item.brandId}`
  }else if(item.categCd === 'WEST' || item.categCd === 'CAFE' || item.categCd === 'CHIKIN' || item.categCd === 'CONV' || item.categCd === 'JAPAN'){
    linkURL = `/points/point_detail?categCd=PS_FOOD&level=1&categCd_lvl2=${item.categCd}&brandId=${item.brandId}`;
  }else{
    linkURL = `/points/point_detail?categCd=PS_PRODUCT&level=1&brandId=${item.brandId}`;
  }
  return (
    <Link href={linkURL}>
      <div className="brand-slider-card">
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
  );
};

export default BestBrandItem;
