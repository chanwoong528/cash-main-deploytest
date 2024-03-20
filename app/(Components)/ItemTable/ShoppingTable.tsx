//@ts-nocheck
"use client";

import React, { useState } from 'react'
import CategoryNav from '../Nav/CategoryNav';
import ShoppingMallItem from './TableItem/ShoppingMallItem';

const ShoppingTable = ({ itemList, navList2nd }) => {
  const [curFilter, setCurFilter] = useState("");
  const onClickFilter = (filterCd) => {
    setCurFilter(filterCd);
  }

  return (
    <div>
      <CategoryNav navList={navList2nd} onClickFilter={onClickFilter} />
      <ul>
        {itemList
          .filter(item => {
            if (curFilter === "") return item
            return Number(item.categCd) === Number(curFilter)
          })
          .map((smItem, idx) => {
            return <ShoppingMallItem key={smItem.merchantId} itemData={smItem} />
          })
        }
      </ul>
    </div>
  )
}

export default ShoppingTable