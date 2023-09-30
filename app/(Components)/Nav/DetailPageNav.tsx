//@ts-nocheck
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import "../../../styles/components/subNav.scss";
const DetailPageNav = ({ navList }) => {
  console.log(navList)
  const router = useRouter();
  const [curTab, setCurTab] = useState(0);
  const onClickTabBtn = (tabIdx, categCd) => {
    setCurTab(tabIdx);
    router.push(`?categCd=${categCd}`);
    router.refresh();
  };
  return (
    <nav className="detail-nav">
      <ul>
        <li className={0 === curTab ? " on" : ""}>
          <button onClick={() => onClickTabBtn(0, "")}>전체</button>
        </li>
        {navList.categs.map((item, idx) => {
          return (
            <li key={item.categCd} className={idx + 1 === curTab ? " on" : ""}>
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
