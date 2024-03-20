//@ts-nocheck
import React from 'react'
import Link from 'next/link'

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
    <Link href={"/shopping/" + itemData.merchantId + window.location.search}>{itemData.siteName}</Link>
  )
}

export default ShoppingMallItem