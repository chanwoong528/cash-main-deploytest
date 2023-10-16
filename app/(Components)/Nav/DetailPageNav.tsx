//@ts-nocheck
"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "../../../styles/components/subNav.scss";
const DetailPageNav = ({ navList }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickTabBtn = (tableIdx, categCd) => {
    router.push(`/hotdeal?categCd=${categCd}`);
    router.refresh();
  };

  return (
    <nav className="detail-nav">
      <ul>
        {navList.map((item, idx) => {
          return (
            <li
              key={item.categCd}
              className={
                !searchParams.get("categCd") && idx === 0
                  ? " on"
                  : searchParams.get("categCd") === item.categCd
                  ? " on"
                  : ""
              }
            >
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
