//@ts-nocheck
"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";

import TableNav from "./TableNav";

import { POINTSHOP_LIST_TYPE } from "@/app/(util)/CATEGORY";

import "../../../styles/components/pointShopTable.scss";

const PointShopTable = ({ type, color, title, data, navData }) => {
  const [curTab, setCurTab] = useState("");

  const [filteredList, setFilteredList] = useState([
    // ...tableData.filter((item, idx) => item.mainCateg.includes(DEFAULT_TAB)),
  ]);
  const onClickNavItem = useCallback((navId) => {
    setCurTab(navId);
    // setFilteredList(tableData.filter((item, idx) => item.mainCateg === navId));
  }, []);
  return (
    <section className="point-shop-section">
      <header className="point-shop-section-header">
        <h3>{title}</h3>
        <Link href={"/"}>전체보기</Link>
      </header>
      {POINTSHOP_LIST_TYPE.WITH_NAV === type ? (
        <TableNav
          navData={navData}
          curTab={curTab}
          onClickNavItem={onClickNavItem}
        />
      ) : null}
      <ul>{/*TODO: */}</ul>
    </section>
  );
};

export default PointShopTable;
