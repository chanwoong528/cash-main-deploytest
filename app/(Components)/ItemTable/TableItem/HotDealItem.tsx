//@ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import ImageWithFallback from "../../ImageWithFallback";

import "../../../../styles/components/hotDealItem.scss";

const HotDealItem = ({ itemData }) => {
  
  return (
    <li key={itemData?.brandId} className="hotdeal-item">
      <Link href={`/hotdeal/${itemData.productName}`}>
        <div className="image-box">
          <ImageWithFallback
            // src={itemData.image}
            src={!!itemData.image ? itemData.image : itemData.imgLink}
            width={260}
            height={260}
            objectFit="contain"
            alt={!!itemData.title ? itemData.title : itemData.name}
          />
        </div>
        <h3>{itemData.name}</h3>
        <div className="info-box">
          <var className="percent">{`${itemData.sale}`}%</var>
          <div className="price-box">
            <var className="op">
              {`${Number(
                !!itemData.listPrice ? itemData.listPrice : itemData.originPrice
              ).toLocaleString()}`}
              <abbr>원</abbr>
            </var>
            <var className="cp">
              {`${Number(
                !!itemData.price ? itemData.price : itemData.salePrice
              ).toLocaleString()}`}
              <abbr>원</abbr>
            </var>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default HotDealItem;
