//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../../../styles/components/pagination.scss";

const PaginationDefault = ({ paginationData }) => {
  const { pageNumber, pageSize, paged, unpaged } = paginationData;
  const [currentPage, setCurrentPage] = useState(pageNumber + 1);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (paged) {
      setCurrentPage(pageNumber + 1);
    } else if (!unpaged) {
      setCurrentPage(1);
    }
  }, [pageNumber, paged, unpaged]);

  const onClickPageNum = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= pageSize) {
      setCurrentPage(pageNumber);
      router.push(
        `/hotdeal?categCd=${searchParams.get("categCd")}&cpage=${pageNumber}`
      );
      router.refresh();
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
              <button onClick={() => onClickPageNum(pageNumber)}>
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
        disabled={currentPage === 1}
        onClick={() => {
          onClickPageNum(1);
        }}
      >
        {"<< ||"}
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          onClickPageNum(currentPage - 1);
        }}
      >
        {"<"}
      </button>
      {pageSize > 1 && renderPagination()}

      <button
        disabled={currentPage === pageSize}
        onClick={() => {
          onClickPageNum(currentPage + 1);
        }}
      >
        {">"}
      </button>
      <button
        disabled={currentPage === pageSize}
        onClick={() => {
          onClickPageNum(pageSize);
        }}
      >
        {"|| >>"}
      </button>
    </nav>
  );
};

export default PaginationDefault;
