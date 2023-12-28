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

const PointProduct = () => {
  return (
    <li>
      <Link href={""}>
        <ImageWithFallback
          src={demoItem.imageLink}
          alt={demoItem.title}
          width={280}
          height={280}
          objectFit='contain'
        />

      </Link>

    </li>
  )
}

export default PointProduct