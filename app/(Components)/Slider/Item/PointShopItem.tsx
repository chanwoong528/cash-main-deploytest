//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "../../ImageWithFallback";

// import "../../../../styles/components/bestBrand.scss";

const PointShopItem = ({ item }) => {
  return (
    <Link href={"/"}>
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

export default PointShopItem;
