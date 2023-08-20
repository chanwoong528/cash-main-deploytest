//@ts-nocheck
"use client";
import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import MoreHref from "../Buttons/MoreHref";
import { CATE_LABEL, URL } from "../../(util)/CATEGORY";
const PointItem = ({ itemData }) => {
  return (
    <li>
      <a href="">
        <div className="image-box">
          <Image
            src={`https://${itemData.image}`}
            width={120}
            height={120}
            alt={itemData.brandName}
            // onError={(event) => console.log("@@@ ", event)}
          />
        </div>
        <h3>{itemData.brandName}</h3>
      </a>
    </li>
  );
};
const ShoppingItem = ({ itemData }) => {
  return (
    <li>
      <a href="">
        <div className="image-box">
          <Image
            src={itemData.imageLink}
            width={120}
            height={60}
            alt={itemData.siteName}
            onError={(event) => console.log(event)}
          />
        </div>
        <h3>{itemData.siteName}</h3>
        <p>최대 {itemData.commission} 캐시백</p>
      </a>
    </li>
  );
};

const HotDealItem = ({ itemData }) => {
  return (
    <li key={itemData.productName}>
      <Link href={`/hotdeal/${itemData.productName}`}>
        <div className="image-box">
          <Image
            src={itemData.image.includes("http") ? itemData.image : ""}
            width={260}
            height={260}
            objectFit="contain"
            alt={itemData.title}
          />
        </div>
        <h3>{itemData.name}</h3>
        <div className="info-box">
          <var className="percent">{`${itemData.sale}`}%</var>
          <div className="price-box">
            <var className="op">
              {`${itemData.listPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              <abbr>원</abbr>
            </var>
            <var className="cp">
              {`${itemData.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              <abbr>원</abbr>
            </var>
          </div>
        </div>
      </Link>
    </li>
  );
};

const MainTable = ({ title, content, navData, tableData, tableCate }) => {
  console.log(tableData);
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
    ...tableData.filter((item, idx) => item.mainCateg.includes(DEFAULT_TAB)),
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
    <section className="itemtable">
      <header>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </header>
      {tableCate !== CATE_LABEL.MERCHANT && (
        <nav
          className={`itemtable-nav${
            tableCate === CATE_LABEL.POINT ? " point-nav" : ""
          }`}
        >
          <ul>
            {navData.map((navItem, idx) => {
              return (
                <li
                  key={navItem.categCd}
                  className={curTab === navItem.categCd ? "on" : ""}
                >
                  <button onClick={() => onClickNavItem(navItem.categCd)}>
                    {navItem.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
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
      <MoreHref title={`${title} 전체보기`} href={URL[tableCate]} color />
    </section>
  );
};

export default MainTable;
