//@ts-nocheck
import Image from "next/image";
import { getShoppingMallList } from "./(http)/productApi";
import ItemTable from "./(Components)/ItemTable/ItemTable";

async function getData() {
  let params = {
    pageNumber: 1,
    pageSize: 1,
  };
  const mallData = await getShoppingMallList(params);
  // {
  //   subCateg: '8',
  //   imageLink: 'http://img.linkprice.com/files/glink/klook/20181011/5bbee16a419bd_120_60.jpg',
  //   merchantId: 'klook',
  //   mainCateg: 'MER_TRAVEL', MER_SHOPPING, MER_ETC, all
  //   siteName: '클룩',
  //   commission: '7%'
  // }
  console.log(mallData)
  return mallData;
}

export default async function Home() {
  const mallList = await getData();
  const mallNavList = [
    { label: "전체", navId: "all" },
    { label: "쇼핑", navId: "MER_SHOPPING" },
    { label: "여행", navId: "MER_TRAVEL" },
    { label: "기타", navId: "MER_ETC" },
  ];

  return (
    <>
      <ItemTable
        title="쇼핑몰"
        content="쇼핑할때마다 캐시백이 최대 20%"
        navList={mallNavList}
        mallList={mallList}
      />
    
    </>
  );
}
