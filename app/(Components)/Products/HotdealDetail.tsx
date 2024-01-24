//@ts-nocheck
"use client";
import React, { useState } from "react";

const HotdealDetail = (props) => {
  const { detailInfo } = props;
  const [showPrdInfomation, setShowPrdInfomation] = useState(false); // product moreInfomation
  
  return (
    <article className="prd-detail">
      <h3>상세정보</h3>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: detailInfo,
          }}
          className={"prd-img" + (showPrdInfomation ? '' : ' hidden') }
        ></div>
        {!(showPrdInfomation) && (
          <div class="btn_wrap">
            <button 
              type="button"
              onClick={ () => setShowPrdInfomation(true) }
              >
                자세히보기
              </button>
          </div>
        ) }
      </div>
    </article>
  );
};

export default HotdealDetail;
