//@ts-nocheck
import http from "../http";

export const getNavCategory = async (gubun, lv) => {
  const fetchNavList = await http.get(`/categ/${gubun}/${lv}`);
  const navListData = await fetchNavList.data;
  return navListData.categs;
};
