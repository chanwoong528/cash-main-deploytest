//@ts-nocheck
import React from 'react'

import { getShoppingMallPage } from '@/app/(http)/apis/productApi';
import { URL } from '@/app/(util)/CATEGORY';

import DetailPageNav from '@/app/(Components)/Nav/DetailPageNav';
import DefaultItemSlider from '@/app/(Components)/Slider/DefaultItemSlider';
import ShoppingTable from '@/app/(Components)/ItemTable/ShoppingTable';

import "../../../../../styles/pages/shoppingMallPage.scss";

async function getData(searchParams) {
  const shoppingMallData = await getShoppingMallPage(searchParams);
  return {
    category1List: shoppingMallData.categ1List,
    category2List: shoppingMallData.category2List,
    popmerchantList: shoppingMallData.popmerchantList,
    merchantList: shoppingMallData.merchantList
  }
}
const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  return (
    <>
      <DetailPageNav pageType={URL.SHOPPING} navList={data.category1List} />
      <main>
        <DefaultItemSlider
          callPage={"shopping"}
          title={"인기브랜드"}
          itemList={data.popmerchantList} />

        <ShoppingTable itemList={data.merchantList} navList2nd={data.category2List} />
      </main>
    </>
  )
}

export default page