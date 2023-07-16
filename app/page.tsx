//@ts-nocheck
import Image from "next/image";
import { getShoppingMallList } from "./(http)/productApi";
import ItemTable from "./(Components)/ItemTable/ItemTable";

async function getData() {
  let params = {
    pageNumber: 1,
    pageSize: 1,
  };
  const mallData = await getShoppingMallList("merchants", params);
  const pointshopData = await getShoppingMallList("pointshops", params);
  /**
  { [mall ex]
    subCateg: '8',
    imageLink: 'http://img.linkprice.com/files/glink/klook/20181011/5bbee16a419bd_120_60.jpg',
    merchantId: 'klook',
    mainCateg: 'MER_TRAVEL', MER_SHOPPING, MER_ETC, all
    siteName: '클룩',
    commission: '7%'
  } */
  /**
  { [point ex]
    "image": "nullnullBBQ.jpg",
      "subCateg": "CHIKIN",
      "brandName": "BBQ",
      "brandId": "574",
      "mainCateg": "PS_FOOD", PS_PRODUCT, PS_CONV
  } */
  const [mallD, pointD] = await Promise.all([
    mallData.merchantList,
    pointshopData.pointshopList,
  ]);

  // pointshopList
  //merchantList
  // console.log(">>>>>>>>>>>>>>>>>>  ", data);
  return { mallD, pointD };
}

export default async function Home() {
  const data = await getData();

  const mallNavList = [
    { label: "전체", navId: "all" },
    { label: "쇼핑", navId: "MER_SHOPPING" },
    { label: "여행", navId: "MER_TRAVEL" },
    { label: "기타", navId: "MER_ETC" },
  ];
  const pointNavList = [
    { label: "인기브랜드", navId: "popul" },
    { label: "상품권/쿠폰", navId: "PS_PRODUCT" },
    { label: "편의점", navId: "PS_CONV" },
    { label: "푸드", navId: "PS_FOOD" },
  ];

  return (
    <>
      <ItemTable
        title="쇼핑몰"
        content="쇼핑할때마다 캐시백이 최대 20%"
        navList={mallNavList}
        mallList={data.mallD}
      />
      <ItemTable
        title="포인트 샵"
        navList={pointNavList}
        mallList={data.pointD}
      />
    </>
  );
}
