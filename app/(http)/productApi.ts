//@ts-nocheck
import http from "./http";

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
