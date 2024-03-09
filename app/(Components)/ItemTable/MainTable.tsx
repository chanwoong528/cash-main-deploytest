//@ts-nocheck
"use client";
import React, { useState, useMemo, useCallback } from "react";
import MoreHref from "../Buttons/MoreHref";

import { CATE_LABEL, URL } from "../../(util)/CATEGORY";

import ShoppingItem from "./TableItem/ShoppingItem";
import HotDealItem from "./TableItem/HotDealItem";
import PointItem from "./TableItem/PointItem";
import TableNav from "./TableNav";

const MainTable = ({ title, content, navData, tableData, tableCate }) => {
  const DEFAULT_TAB = useMemo(() => {
    switch (tableCate) {
      case CATE_LABEL.SHOPPING:
        return "all";
      case CATE_LABEL.POINT:
        return "PS_PRODUCT";
      default:
        return "";
    }
  }, []);
  const [curTab, setCurTab] = useState(DEFAULT_TAB);
  const [filteredList, setFilteredList] = useState([
    ...tableData?.filter((item, idx) => item.mainCateg.includes(DEFAULT_TAB)),
  ]);
  const renderItem = useCallback((tableCate, data) => {
    switch (tableCate) {
      case CATE_LABEL.SHOPPING:
        return data.map((shoppingMall, idx) => {
          return (
            <ShoppingItem
              itemData={shoppingMall}
              key={shoppingMall.merchantId}
            />
          );
        });
      case CATE_LABEL.MERCHANT:
        return data.map((hotItem, idx) => {
          return <HotDealItem itemData={hotItem} key={hotItem.brandId} />;
        });
      case CATE_LABEL.POINT:
        return data.slice(0, 10).map((brand, idx) => {
          return <PointItem itemData={brand} key={brand.brandId} />;
        });
    }
  }, []);
  const onClickNavItem = useCallback((navId) => {
    setCurTab(navId);
    setFilteredList(tableData.filter((item, idx) => item.mainCateg === navId));
  }, []);
  return (
    <section
      className={`itemtable${
        tableCate === CATE_LABEL.MERCHANT ? " color" : ""
      }`}
    >
      <header>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </header>
      {tableCate !== CATE_LABEL.MERCHANT && (
        <TableNav
          tableCate={tableCate}
          navData={navData}
          onClickNavItem={onClickNavItem}
          curTab={curTab}
        />
      )}
      <ul
        className={`table-list${
          tableCate === CATE_LABEL.POINT
            ? " point-list"
            : tableCate === CATE_LABEL.MERCHANT
            ? " hotdeal-list"
            : ""
        }`}
      >
        {renderItem(tableCate, filteredList)}
      </ul>
      <MoreHref
        title={`${
          tableCate !== CATE_LABEL.MERCHANT ? title : "핫 딜 상품"
        } 전체보기`}
        href={URL[tableCate]}
        color={tableCate !== CATE_LABEL.MERCHANT}
      />
    </section>
  );
};

export default MainTable;
