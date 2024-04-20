//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "../../ImageWithFallback";

// import "../../../../styles/components/bestBrand.scss";

const BestBrandItem = ({ item }) => {
  let categCd_lvl1 = '';
  if(item.categCd === 'CONV'){
    categCd_lvl1 = 'PS_CONV';
  }else if(item.categCd === 'WEST' || item.categCd === 'CAFE' || item.categCd === 'CHIKIN' || item.categCd === 'CONV' || item.categCd === 'JAPAN'){
    categCd_lvl1 = 'PS_FOOD';
  }else{
    categCd_lvl1 = 'PS_PRODUCT';
  }
  return (
    <Link href={`/points/point_detail?categCd=${categCd_lvl1}&categCd_lvl2=${item.categCd}&brandId=${item.brandId}`}>
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
