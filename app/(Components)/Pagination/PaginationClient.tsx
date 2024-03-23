//@ts-nocheck
"use client";
import React, { useState } from "react";

import "../../../styles/components/pagination.scss";

const PaginationClient = ({ paginationData, setCurPage }) => {

  const { pageNumber, pageSize } = paginationData;
  const [currentPage, setCurrentPage] = useState(pageNumber + 1);

  const onClickPageNum = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= pageSize) {
      setCurrentPage(pageNumber);
      setCurPage(pageNumber)
    }
  };

  const renderPagination = () => {
    const maxPageNumber = pageSize;
    const currentPageIndex = currentPage - 1;
    const startPage = Math.max(currentPageIndex - 2, 0);
    const endPage = Math.min(startPage + 4, maxPageNumber - 1);
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index + 1
    );
    return (
      <ul className="pagination-list">
        {pageNumbers.map((pageNumber) => {
          return (
            <li
              key={pageNumber}
              className={pageNumber === currentPage ? "on" : ""}
            >
              <button type="button" onClick={() => onClickPageNum(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <nav className="pagination-con">
      <button
        className="paginate_btn paginate_btn-first"
        disabled={currentPage === 1}
        type="button"
        onClick={() => {
          onClickPageNum(1);
        }}
      >
        Go to first page
      </button>
      <button
        className="paginate_btn paginate_btn-prev"
        disabled={currentPage === 1}
        type="button"
        onClick={() => {
          onClickPageNum(currentPage - 1);
        }}
      >
        Go to prev page
      </button>
      {pageSize > 1 && renderPagination()}

      <button
        className="paginate_btn paginate_btn-next"
        disabled={currentPage === pageSize}
        type="button"
        onClick={() => {
          onClickPageNum(currentPage + 1);
        }}
      >
        Go to next page
      </button>
      <button
        className="paginate_btn paginate_btn-last"
        disabled={currentPage === pageSize}
        type="button"
        onClick={() => {
          onClickPageNum(pageSize);
        }}
      >
        Go to last page
      </button>
    </nav>
  );
};

export default PaginationClient;
