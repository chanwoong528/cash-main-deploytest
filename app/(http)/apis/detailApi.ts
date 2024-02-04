//@ts-nocheck
import http from "../http";

export const getPointShopHome = async () => {
  const fetchPointshop = await http.get("/pointshop/home", {});

  if (fetchPointshop.code === 200) {
    let data = await fetchPointshop.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};

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
export const getHotdealItem = async (productNum) => {
  const fetchHotdealDetail = await http.get(`/hotdeal/view`, {
    params: { productNum: productNum },
  });
  // console.log("!!! fet", fetchHotdealDetail);
  if (fetchHotdealDetail.code === 200) {
    let data = await fetchHotdealDetail.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};

export const getHotdealOthers = async (categCd) => {
  const fetchHotdealOthers = await http.get(`/hotdeal/others`, {
    params: { categCd : categCd },
  });
  console.log("!!! fet", fetchHotdealOthers);
  if (fetchHotdealOthers.code === 200) {
    let data = await fetchHotdealOthers.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};
