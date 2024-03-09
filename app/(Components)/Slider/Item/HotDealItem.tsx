//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "../../ImageWithFallback";

const HotDealItem = ({ item }) => {
  return (
    <Link href={`/hotdeal/${item.productNum}`}>
      <div className="hotdeal-slider-card">
        <ImageWithFallback
          src={item.imgLink}
          width={207}
          height={110}
          objectFit="contain"
          alt={item.name}
        />
        <p className="hotdeal-title">{item.name}</p>
        <div class="info-box">
          {item.sale !== 0 && (
            <var class="percent">{item.sale}%</var>
          )}
          <div class="price-box">
            {item.originPrice !== 0 && (
              <var class="op">
                {item.originPrice}<abbr>원</abbr>
              </var>
            )}
            <var class="cp">
              {item.salePrice}<abbr>원</abbr>
            </var>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotDealItem;
