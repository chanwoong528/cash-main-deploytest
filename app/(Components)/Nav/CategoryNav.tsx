//@ts-nocheck
'use client'
import React from 'react'

const CategoryNav = ({ navList, onClickFilter }) => {
  return (
    <nav>
      카테고리
      <ul>
        {navList.map((item, idx) => {
          return <li key={item.title}>
            <button onClick={() => onClickFilter(item.categCd)}>
              {item.title}
            </button>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default CategoryNav