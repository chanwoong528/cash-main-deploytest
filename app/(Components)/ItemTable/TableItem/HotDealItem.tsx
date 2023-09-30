//@ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import ImageWithFallback from "../../ImageWithFallback";

const HotDealItem = ({ itemData }) => {
  return (
    <li key={itemData.brandId}>
      <Link href={`/hotdeal/${itemData.productName}`}>
        <div className="image-box">
          <ImageWithFallback
            src={itemData.image}
            width={260}
            height={260}
            objectFit="contain"
            alt={itemData.title}
          />
        </div>
        <h3>{itemData.name}</h3>
        <div className="info-box">
          <var className="percent">{`${itemData.sale}`}%</var>
          <div className="price-box">
            <var className="op">
              {`${itemData.listPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              <abbr>원</abbr>
            </var>
            <var className="cp">
              {`${itemData.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              <abbr>원</abbr>
            </var>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default HotDealItem;
