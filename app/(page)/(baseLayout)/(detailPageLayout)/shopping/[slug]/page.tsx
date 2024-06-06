//@ts-nocheck


import React from 'react'
import Link from "next/link";

import { getShoppingMallDetail, getShoppingMallPage } from '@/app/(http)/apis/productApi';
import { URL } from '@/app/(util)/CATEGORY';

import DetailPageNav from '@/app/(Components)/Nav/DetailPageNav';
import ImageWithFallback from '@/app/(Components)/ImageWithFallback';

import "../../../../../../styles/pages/shoppingMallDetail.scss";



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
  const shopInfo = await data.shoppingMallItem;

  const htmlDecode = (content) => {
    return content.replace(/\n/g, "<br/>")
  }

  return (
    <>
      <DetailPageNav pageType={URL.SHOPPING} navList={data.category1List} />
      <main className='main-shop-detail'>
        <section>
          <div>
            <header>
              <div className='img-con'>
                <ImageWithFallback
                  src={shopInfo.imageLink}
                  objectFit="contain"
                  width={120}
                  height={60}
                  alt=""
                />
              </div>
              <div>
                <h3>
                  {shopInfo.siteName}
                </h3>
                <p>{shopInfo.commissionComment}</p>
              </div>
            </header>
            <div>
              <button>heart</button>
              <Link href={shopInfo.deeplink} target='__blank'>쇼핑하기</Link>
            </div>
          </div>

          <div className='brand-info-con'>
            <p>브랜드 소개</p>
            <div
              className='text-inner'
              dangerouslySetInnerHTML={{ __html: htmlDecode(shopInfo.checkComment) }}
            />
          </div>

          <div className='brand-info-con'>
            <p>유의사항</p>
            <div
              className='text-inner'
              dangerouslySetInnerHTML={{ __html: htmlDecode(shopInfo.adviceComment) }}
            />
          </div>

        </section>

      </main>
    </>
  )
}

export default page