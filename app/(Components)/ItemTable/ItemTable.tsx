//@ts-nocheck
"use client";
import React, { useState } from "react";
import Image from "next/image";

const ItemTable = ({ title, content, navList, mallList }) => {
  const [curTab, setCurTab] = useState(title === "쇼핑몰" ? "all" : "popul");
  const [filteredList, setFilteredList] = useState([
    ...mallList.filter((item, idx) =>
      title === "쇼핑몰" ? item.mainCateg === "all" : idx < 8
    ),
  ]);
  const onClickNavItem = (navId) => {
    setCurTab(navId);
    setFilteredList(mallList.filter((item, idx) => item.mainCateg === navId));
  };
  return (
    <section className="itemtable">
      <header>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
      </header>
      <nav className="itemtable-nav">
        <ul>
          {navList.map((navItem, idx) => {
            return (
              <li key={idx} className={curTab === navItem.navId ? "on" : ""}>
                <button onClick={() => onClickNavItem(navItem.navId)}>
                  {navItem.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="shoppingmall-list">
        {filteredList.map((shoppingMall, idx) => {
          return title === "쇼핑몰" ? (
            <li key={idx}>
              <a href="">
                <div className="image-box">
                  <Image
                    src={shoppingMall.imageLink}
                    width={120}
                    height={60}
                    alt={shoppingMall.siteName}
                    onError={(event) => console.log(event)}
                  />
                </div>
                <h3>{shoppingMall.siteName}</h3>
                <p>최대 {shoppingMall.commission} 캐시백</p>
              </a>
            </li>
          ) : (
            <li key={idx}>
              <a href="">
                <div className="image-box"></div>
                <h3>{shoppingMall.brandName}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ItemTable;
