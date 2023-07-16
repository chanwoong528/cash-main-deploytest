import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link';
import Image from 'next/image';


import { hotdealNavMenuList } from "../../utils/Constants";
import InnerNav from '../../(Components)/common/InnerNav'
import axios from 'axios';
import Paging from '../../(Components)/layout/Paging';

export default function Index({ hotdealList, maxPage }) {
    const [curpage, setCurPage] = useState(1);



    return (
        <main className='main-home hotdeal-main'>
            <InnerNav listMenu={hotdealNavMenuList} type={"car"} />
            <div className="hotdeal-banner"></div>
            <ul className='hotdeal-list'>
                {hotdealList.map((hotdeal, idx) => {
                    return <li key={idx} >
                        <Link href={`/hotdeal/${hotdeal.pid}`}>
                            <div>
                                <div className="image-box">
                                    <Image src={hotdeal.imgSrc} width={278} height={278} objectFit="contain" alt={hotdeal.title} />
                                </div>
                                <h3>{hotdeal.title}</h3>
                                <div className="info-box">
                                    <var className="percent">{`${hotdeal.dcPercent}`}%</var>
                                    <div className="price-box">
                                        <var className="op">
                                            {`${hotdeal.originalP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                            <abbr>원</abbr>
                                        </var>
                                        <var className="cp">
                                            {`${hotdeal.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}<abbr>원</abbr>
                                        </var>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    </li>
                })}
            </ul>
            <Paging setCurPage={setCurPage} maxPage={maxPage} curpage={curpage} />
        </main>
    )
}

Index.getInitialProps = async ({ query: { page = 1 } }) => {

    const r = await axios.get(
        `${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/hotdeal?page=${page < 1 ? 1 : page}`
    )

    // console.log(r.data)
    return {
        hotdealList: r.data.hotdealList,
        maxPage: r.data.maxPage
    }
}
