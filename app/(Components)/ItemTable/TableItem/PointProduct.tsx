import React from 'react'
import Link from 'next/link'
import ImageWithFallback from '../../ImageWithFallback'

const PointProduct = ({ categCd, itemData } : { categCd:string, itemData : {
  goodsId: String,
  goodsName: String,
  brandId: String,
  brandName: String,
  price: Number,
  sprice: Number,
  imgLink: String,
}}) => {
  const itemInfo = {
    goodsId: itemData.goodsId,
    goodsName: itemData.goodsName,
    brandId: itemData.brandId,
    title : itemData.brandName,
    imageLink : itemData.imgLink,
    price: itemData.price,
    sprice: itemData.sprice,
  }

  return (
    <li>
      <Link href={`/points/point_detail/${itemInfo.goodsId}?categCd=${categCd}`}>
        <div className='img'>
          <ImageWithFallback
            src={itemInfo.imageLink}
            alt={itemInfo.title}
            width={280}
            height={280}
            objectFit='contain'
          />
        </div>
        <p>{itemInfo.title}</p>
        <p>{itemInfo.goodsName}</p>
        <div className="point-price">
          <div></div>
          <h3>{String(itemInfo.sprice)}<span>원</span></h3>
        </div>
      </Link>
    </li>
  )
}

export default PointProduct