//@ts-nocheck
import React from "react";
import ImageWithFallback from "../../ImageWithFallback";

import "./ShoppingItem.scss";

const ShoppingItem = ({ itemData }) => {
  return (
    <li className="card-item shopping-item" key={itemData.merchantId}>
      <a href="">
        <div className="image-box">
          <ImageWithFallback
            src={itemData.imageLink}
            width={120}
            height={60}
            alt={itemData.siteName}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h3>{itemData.siteName}</h3>
        <p>최대 {itemData.commission} 캐시백</p>
      </a>
    </li>
  );
};

export default ShoppingItem;
