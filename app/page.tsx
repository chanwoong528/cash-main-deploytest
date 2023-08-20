//@ts-nocheck
import Image from "next/image";

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
      <article className="main-jumbo">
        <Image width={1200} height={485} src="/asset/images/main-jumbo.png" />
      </article>
      <MainTable
        title="쇼핑몰"
        content="쇼핑할때마다 캐시백이 최대 20%"
        tableData={data.mallD.merchantList}
        navData={data.mallD.categList}
        tableCate={CATE_LABEL.SHOPPING}
      />
      <article className="main-banner">
        <h3>스마트한 쇼핑 습관</h3>
        <ol>
          <li>
            <p>회원가입</p>
          </li>
          <li>
            <p>쇼핑 경유</p>
          </li>
          <li>
            <p>캐시적립</p>
          </li>
          <li>
            <p>환급or쿠폰</p>
          </li>
        </ol>
      </article>
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
