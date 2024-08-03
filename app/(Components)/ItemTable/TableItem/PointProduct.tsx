import React from 'react'
import Link from 'next/link'
import ImageWithFallback from '../../ImageWithFallback'


const demoItem = {
  brandId: "123",
  imageLink: "",
  cateName: "준비중입니다",
  title: "[준비중입니다] 10원",
  price: 1000
}

const PointProduct = ({ itemData } : { itemData : {
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
      <Link href={""}>
        <ImageWithFallback
          src={itemInfo.imageLink}
          alt={itemInfo.title}
          width={280}
          height={280}
          objectFit='contain'
        />
      </Link>
    </li>
  )
}

export default PointProduct