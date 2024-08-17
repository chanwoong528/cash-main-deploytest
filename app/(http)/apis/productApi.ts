//@ts-nocheck
import http from "../http";

export const getShoppingMallList = async (urlGubun, params) => {
  const fetchMallList = await http.get(
    `/main/${urlGubun}`,
    {},
    {
      params: params,
    }
  );
  if (fetchMallList.code === 200) {
    let data = await fetchMallList.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};

export const getShoppingMallPage = async (params) => {
  const fetchMallPage = await http.get(`/merchant/list/lvl1`, {
    params: params,
  });
  if (fetchMallPage.code === 200) {
    const data = await fetchMallPage.data;
    console.log(data);

    return data;
  } else {
    return { message: "500 error" };
  }
};

export const getShoppingMallDetail = async (params) => {
  const fetchMallDetail = await http.get(`/merchant/view`, {
    params: params,
  });
  if (fetchMallDetail.code === 200) {
    const data = await fetchMallDetail.data;
    return data;
  } else {
    return { message: "500 error" };
  }
};
