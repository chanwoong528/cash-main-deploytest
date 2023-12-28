//@ts-nocheck

import React from "react";
import ImageWithFallback from "../../ImageWithFallback";

import "./PointItem.scss";


const PointItem = ({ itemData, psType }) => {
  return (
    <li className={`card-item ps-item ${psType}`} key={itemData.brandId}>
      <a href={""}>
        <div className="image-box">
          <ImageWithFallback
            src={itemData.image.includes('https://') ?
              itemData.image :
              `https://${itemData.image}`}
            width={120}
            height={!!psType ? 60 : 120}
            alt={itemData.brandName}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h3>{itemData.brandName}</h3>
      </a>
    </li>
  );
};

export default PointItem;
