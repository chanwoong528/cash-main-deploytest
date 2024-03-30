//@ts-nocheck

import React, { useState, useMemo } from "react";

import { CATE_LABEL } from "@/app/(util)/CATEGORY";

const TableNav = ({ tableCate, navData, onClickNavItem, curTab }) => {
  return (
    <nav
      className={`itemtable-nav${tableCate === CATE_LABEL.POINT ? " point-nav" : ""
        }`}
    >
      <ul>
        {navData.map((navItem, idx) => {
          return (
            <li
              key={navItem.categCd + idx}
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
  );
};

export default TableNav;
