//@ts-nocheck

import React from 'react'

import { getShoppingMallDetail } from '@/app/(http)/apis/productApi';

async function getData(merchantId) {

  const [shoppingMallItem] = await Promise.all([getShoppingMallDetail({ merchantId: merchantId })]);
  return { shoppingMallItem: shoppingMallItem.merchantDTO };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  return (
    <main>
      {      data.shoppingMallItem.siteName}
    </main>
  )
}

export default page