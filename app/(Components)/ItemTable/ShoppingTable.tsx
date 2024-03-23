//@ts-nocheck
"use client";
import React, { useState } from 'react'
import CategoryNav from '../Nav/CategoryNav';
import ShoppingMallItem from './TableItem/ShoppingMallItem';

import "./shoppingTable.scss";
import PaginationClient from '../Pagination/PaginationClient';


const ShoppingTable = ({ itemList, navList2nd }) => {
  const [curFilter, setCurFilter] = useState("");
  const [curPage, setCurPage] = useState(1)

  const onClickFilter = (filterCd) => {
    setCurFilter(filterCd);
  }

  return (
    <div className='main-shopping-table'>
      <CategoryNav navList={navList2nd} curFilter={curFilter} onClickFilter={onClickFilter} />
      <ul className='main-shopping-list'>
        {itemList
          .filter(item => {
            if (curFilter === "") return item
            return Number(item.categCd) === Number(curFilter)
          })
          .slice((curPage - 1) * 16, curPage * 16)
          .map((smItem, idx) => {
            return <ShoppingMallItem key={smItem.merchantId} itemData={smItem} />
          })
        }
      </ul>
      <PaginationClient
        paginationData={{
          pageNumber: curPage,
          pageSize: itemList
            .filter(item => {
              if (curFilter === "") return item
              return Number(item.categCd) === Number(curFilter)
            }).length / 16
        }}
        setCurPage={setCurPage}
      />
    </div>

  )
}

export default ShoppingTable