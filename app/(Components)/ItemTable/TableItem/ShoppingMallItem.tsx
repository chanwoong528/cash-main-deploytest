//@ts-nocheck
import React from 'react'
import Link from 'next/link'
import ImageWithFallback from '../../ImageWithFallback';

import "./shoppingMallItem.scss";

const ShoppingMallItem = ({ itemData }) => {
  // {
  //   merchantId: 'hcombine',
  //   categCd: '8',
  //   siteName: '호텔스컴바인',
  //   siteUrl: 'https://www.hotelscombined.co.kr',
  //   imageLink: 'http://img.linkprice.com/files/glink/hcombine/20180918/5ba04c18af5a6_120_60.jpg',
  //   view: 0,
  //   popularityOrd: 0,
  //   favCnt: 0,
  //   favYn: 'N',
  //   commissionComment: '4.9%',
  //   mobileCommissionComment: '4.9%'
  // },
  return (
    <div className='shopping-mall-item'>
      <button className='mall-like-btn'>like brand</button>
      <Link href={"/shopping/" + itemData.merchantId + (window?.location.search ?? "")}>
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
        <p className='mall-title'>
          {itemData.siteName}
        </p>
        <p className='mall-commission'>
          최대 {itemData.commissionComment}
        </p>
      </Link>
    </div>
  )
}

export default ShoppingMallItem