//@ts-nocheck
import http from "./http";

export const getShoppingMallList = async (params) => {
  const fetchMallList = await http.get(
    "/main/merchants",
    {},
    {
      params: params,
    }
  );

  if (fetchMallList.code === 200) {
    let data = await fetchMallList.data;
    return data.merchantList;
  } else {
    return { message: "500 error" };
  }
};
