//@ts-nocheck
"use client";
import React from "react";
import ImageWithFallback from "./ImageWithFallback";

const HotdealCard = ({ key, itemData }) => {
  return (
    <li key={key}>
      <a href={`/hotdeal/${itemData.productNum}?categCd=${itemData.categCd}`}>
        <ImageWithFallback
          src={itemData.imgLink}
          width={260}
          height={260}
          objectFit="contain"
          alt={itemData.name}
        />
        <h3>{itemData.name}</h3>
        <div className="price-box">
          <p className="percent">{itemData.sale}</p>
          <div>
            <p className="price-original">{itemData.originPrice}</p>
            <p className="price-new">{itemData.salePrice}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default HotdealCard;
