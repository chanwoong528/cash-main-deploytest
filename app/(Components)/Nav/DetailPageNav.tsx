//@ts-nocheck
"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { URL } from "@/app/(util)/CATEGORY";

import "../../../styles/components/subNav.scss";

const DetailPageNav = ({ pageType, navList }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTabBtn = (tableIdx, categCd) => {
    if (pageType === URL.POINT) {
      if (!categCd) {
        router.push(`${pageType}`);
        return router.refresh();
      }
      router.push(`${pageType}/point_detail?categCd=${categCd}`);
      return router.refresh();
    }
    router.push(`${pageType}?categCd=${!!categCd ? categCd : ""}`);
    return router.refresh();
  };

  const renderActiveClassName = (item, idx) => {
    switch (pageType) {
      // case URL.POINT:
      //   console.log(idx, pathname.split("/"));
      //   return idx === 0 ? " on" : pathname.includes(item.categCd) ? " on" : "";
      default:
        return !searchParams.get("categCd") && idx === 0
          ? " on"
          : searchParams.get("categCd") === item.categCd
            ? " on"
            : "";
    }
  };

  return (
    <nav className="detail-nav">
      <ul>
        {navList.map((item, idx) => {
          return (
            <li key={item.categCd} className={renderActiveClassName(item, idx)}>
              <button onClick={() => onClickTabBtn(idx + 1, item.categCd)}>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DetailPageNav;
