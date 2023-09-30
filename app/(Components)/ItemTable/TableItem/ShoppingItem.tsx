//@ts-nocheck
import React from "react";
import ImageWithFallback from "../../ImageWithFallback";

const ShoppingItem = ({ itemData }) => {
  return (
    <li key={itemData.merchantId}>
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
