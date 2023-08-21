//@ts-nocheck
import http from "./http";

export const getNotices = async () => {
  try {
    const fetchNotice = await http.get("/notice/list");
    const noticeData = await fetchNotice.data;
    return noticeData;
  } catch (error) {
    console.error("getNotices[error]: ", error);
  }
};
