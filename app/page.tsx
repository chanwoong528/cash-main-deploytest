//@ts-nocheck
import { getShoppingMallList } from "./(http)/productApi";

import MainTable from "./(Components)/ItemTable/MainTable";

import { CATE_LABEL } from "./(util)/CATEGORY";

async function getData() {
  let params = {
    pageNumber: 1,
    pageSize: 1,
  };
  const mallData = await getShoppingMallList("merchants", params);
  const pointshopData = await getShoppingMallList("pointshops", params);
  const hotDealData = await getShoppingMallList("hotdeals", params);
  const [mallD, pointD, hotD] = await Promise.all([
    mallData,
    pointshopData,
    hotDealData,
  ]);

  return { mallD, pointD, hotD };
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <MainTable
        title="쇼핑몰"
        content="쇼핑할때마다 캐시백이 최대 20%"
        tableData={data.mallD.merchantList}
        navData={data.mallD.categList}
        tableCate={CATE_LABEL.SHOPPING}
      />
      <MainTable
        title="MD추천 핫 딜 상품"
        tableData={data.hotD.hotdealList}
        // navData={data.mallD.categList}
        tableCate={CATE_LABEL.MERCHANT}
      />
      <MainTable
        title="포인트 샵"
        tableData={data.pointD.pointshopList}
        navData={data.pointD.categList}
        tableCate={CATE_LABEL.POINT}
      />
    </>
  );
}
