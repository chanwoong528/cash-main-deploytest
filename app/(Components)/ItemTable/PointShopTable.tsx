//@ts-nocheck
"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive"
import Link from "next/link";
import DefaultItemSlider from "@/app/(Components)/Slider/DefaultItemSlider";

import TableNav from "./TableNav";

import { POINTSHOP_LIST_TYPE } from "@/app/(util)/CATEGORY";
import ImageWithFallback from "../ImageWithFallback";

import "../../../styles/components/pointShopTable.scss";

const mobileDataCalculator = (data) => {
  const dataCopy = data.map((item) => item);

  const length = data.length;
  const divide = Math.floor(length / 6 ) + (Math.floor( length % 6 ) > 0 ? 1 : 0);
  const newArray = [];
  
  for (let i = 0; i < divide; i++) {
    newArray.push(dataCopy.splice(0, 6)); 
  }

  return newArray;
}

const PointShopTable = ({ type, categCd, data, navData }) => {
  const [curData, setCurData] = useState(data);
  const [curTab, setCurTab] = useState("");
  const isDesktop = useMediaQuery({
 	  query: "(min-width: 900px)"
	})

  const mobileData = mobileDataCalculator(data);
  
  useEffect(()=>{
    if(isDesktop){
      setCurData(curData)
    }else{
      setCurData(mobileData)
    }
  },[isDesktop])

  const onClickNavItem = useCallback((navId) => {
    if(navId === ''){
      setCurData(data);
    }else{
      setCurData(data.filter((item) => item.categCd === navId));
    }
    setCurTab(navId);
    
  }, []);

  return (
    <section className="point-shop-section">
      <header className="point-shop-section-header">
        <h3>{categCd === 'PS_CONV' ? '편의점' : categCd === 'PS_PRODUCT' ? '상품권/쿠폰' : 'Food'}</h3>
        <Link href={`/points/point_detail?categCd=${categCd}&level=1`}>전체보기</Link>
      </header>
      {POINTSHOP_LIST_TYPE.WITH_NAV === type ? (
        <TableNav
          navData={navData}
          curTab={curTab}
          onClickNavItem={onClickNavItem}
        />
      ) : null}

      {isDesktop ? (
        <div className="point_shop-item_list">
          {
            curData.map((item)=>{
              return (
                <div key={item.brandId} className="item">
                  <Link href={`/points/point_detail?categCd=${categCd}&level=1&categCd_lvl2=&brandId=${item.brandId}`}>
                    <div className="img">
                      <ImageWithFallback
                        src={item.imgLink}
                        objectFit="contain"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <p>{item.brandName}</p>
                  </Link>
                </div>
              )
            })
          }
          </div>
      ) : (
        <DefaultItemSlider
          callPage={"pointShopList"}
          title={"상품리스트"}
          itemList={mobileData}
        />
      )}
    </section>
  );
};

export default PointShopTable;
