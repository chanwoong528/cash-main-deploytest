import React from 'react'
import PaginationDefault from '../Pagination/PaginationDefault';
import PointProduct from './TableItem/PointProduct';


const paginationData = {
  pageNumber: 0,
  pageSize: 10,
  paged: 0,
  unpaged: 1,
};
const PointShopDetailProductTable = () => {
  return (
    <div>
      <ul>
        {/* {Array.from({ length: 10 }).map(item => <PointProduct />)} */}
      </ul>
      <PaginationDefault
        paginationData={paginationData}
        totalPages={1}
        />
    </div>
  )
}

export default PointShopDetailProductTable