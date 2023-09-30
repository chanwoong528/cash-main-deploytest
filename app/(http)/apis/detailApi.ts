//@ts-nocheck
import http from "../http";

export const getDetailList = async (urlGubun, params) => {
  const fetchDetailList = await http.get(
    `${urlGubun}/list`,
    {},
    {
      params: params,
    }
  );
  
  if (fetchDetailList.code === 200) {
    let data = await fetchDetailList.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};

export const getCategories = async (urlGubun, level) => {
  //포인트 샵 : POINTSHOP, 핫딜 : HOTDEAL, 머천트 : MERCHANT
  const fetchCategories = await http.get(`/categ/${urlGubun}/${level}`);

  if (fetchCategories.code === 200) {
    let data = await fetchCategories.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};
