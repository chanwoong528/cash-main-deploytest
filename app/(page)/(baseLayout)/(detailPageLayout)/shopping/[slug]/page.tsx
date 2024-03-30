//@ts-nocheck

import React from 'react'

import { getShoppingMallDetail, getShoppingMallPage } from '@/app/(http)/apis/productApi';
import { URL } from '@/app/(util)/CATEGORY';

import DetailPageNav from '@/app/(Components)/Nav/DetailPageNav';

async function getData(merchantId, searchParams) {

  const [shoppingMallItem, shoppingMallData] = await Promise.all([
    getShoppingMallDetail({ merchantId: merchantId }),
    getShoppingMallPage(searchParams)
  ]);
  return {
    shoppingMallItem: shoppingMallItem.merchantDTO,
    category1List: shoppingMallData.categ1List,
  };
}

const page = async ({ params, searchParams }: { params: { slug: string } }) => {
  const data = await getData(params.slug, searchParams);

  return (
    <>
      <DetailPageNav pageType={URL.SHOPPING} navList={data.category1List} />
      <main>
        {data.shoppingMallItem.siteName}
      </main>
    </>
  )
}

export default page