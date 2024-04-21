//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import "../../../styles/components/pagination.scss";

const PaginationDefault = ({ paginationData }) => {
  const { pageNumber, pageSize, paged, unpaged } = paginationData;
  const [currentPage, setCurrentPage] = useState(pageNumber + 1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
      
      if(searchParams.get('gubun') !== undefined){
        router.push(
          `${pathname}?gubun=${
            searchParams.get("gubun") ? searchParams.get("gubun") : ""
          }&cpage=${pageNumber}`
        );
      }else{
        router.push(
          `${pathname}?categCd=${
            searchParams.get("categCd") ? searchParams.get("categCd") : ""
          }&cpage=${pageNumber}`
        );
      }

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

export default PaginationDefault;
