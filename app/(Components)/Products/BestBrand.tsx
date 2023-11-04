//@ts-nocheck
"use client";
import React from "react";
import "../../../styles/components/bestBrand.scss";

const BestBrand = ({ itemList }) => {
  return (
    <div className="best-brand">
      <h3>인기브랜드</h3>
      <ul>
        {itemList.map((item)=>{
          return <li key={item.brandId}>{item.brandName}</li>
        })}
      </ul>
    </div>
  );
};

export default BestBrand;