//@ts-nocheck
import http from "./http";

export const getNotices = async () => {
  try {
    const fetchNotices = await http.get("/notice/list");
    const noticesData = await fetchNotices.data;
    return noticesData;
  } catch (error) {
    console.error("getNotices[error]: ", error);
  }
};

export const getNotice = async (params) => {
  try {
    const fetchNotice = await http.get("/notice/view", { params: params });
  } catch (error) {}
};
