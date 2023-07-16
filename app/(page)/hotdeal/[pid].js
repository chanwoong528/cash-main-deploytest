import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InnerNav from "../../(Components)/common/InnerNav";
import Image from "next/future/image";
import { hotdealNavMenuList } from "../../utils/Constants";

import useIsInViewport from "../../utils/customHook/useIsInViewport";


import SliderH from "../../(Components)/common/SliderH";

export default function HotDealDetailPage({ singleHotdeal, recommandList }) {
    const router = useRouter();
    const { pid } = router.query;
    const [viewmore, setViewmore] = useState(false);
    const [bannerfix, setBannerfix] = useState(false);

    const headerRef = useRef(null)
    const headerIsViewport = useIsInViewport(headerRef);

    useEffect(() => {
        if (headerIsViewport) {
            setBannerfix(false)
        } else {
            setBannerfix(true)
        }
    }, [headerIsViewport])


    return (
        <main className='main-home'>
            <InnerNav listMenu={hotdealNavMenuList} type={singleHotdeal.type} />
            <>{/*홈 > 핫딜 > 패션/뷰티 >....*/}</>
            <div className='detail-wrapper'>
                <section className='hotdeal-detail-intro'>
                    <div className='img-box'>
                        <Image
                            src={singleHotdeal.imgSrc}
                            width={450}
                            height={450}

                            alt={singleHotdeal.title}
                        />
                    </div>
                    <header className='info-box'>
                        <h2>{singleHotdeal.title}</h2>
                        <div className='price-box'>
                            <var className='percent'>{`${singleHotdeal.dcPercent}`}%</var>
                            <div className='price-con'>
                                <var className='op'>
                                    {`${singleHotdeal.originalP
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                </var>
                                <abbr className='unit'>원</abbr>
                                <var className='cp'>
                                    {`${singleHotdeal.price
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                </var>
                                <abbr className='unit'>원</abbr>
                            </div>
                        </div>
                        <button className='buy-btn'>바로 구매하기</button>
                        {/* this can be Link => link to buying direction*/}
                    </header>
                </section>
                <section className='hotdeal-deatail-product'>
                    <header>
                        <h2 ref={headerRef}>상세정보</h2>
                    </header>
                    <article className='product-detail-arti'>
                        <div className={`product-detail ${viewmore ? "on" : ""}`}>
                            <div className='img-box'>
                                <Image
                                    src={singleHotdeal.detail.subImgSrc}
                                    alt={singleHotdeal.title}
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <div className='img-box-detail'>
                                <Image
                                    src={singleHotdeal.detail.mainImgSrc}
                                    alt={singleHotdeal.title}
                                    width='0'
                                    height='0'
                                    sizes='100vw'
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                            <button
                                onClick={() => {
                                    setViewmore(!viewmore);
                                }}
                                className='view-more-btn'>
                                {viewmore ? "상품 상세 접기" : "상품 상세 보기"}
                            </button>
                        </div>
                        <aside className={`product-aside ${bannerfix ? "fixed" : ""}`}>
                            <h2>{singleHotdeal.title}</h2>
                            <div className='price-box'>
                                <var className='percent'>{`${singleHotdeal.dcPercent}`}%</var>
                                <div className='price-con'>
                                    <var className='cp'>
                                        {`${singleHotdeal.price
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                        <abbr className='unit'>원</abbr>
                                    </var>

                                    <var className='op'>
                                        {`${singleHotdeal.originalP
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                        <abbr className='unit'>원</abbr>
                                    </var>
                                </div>
                            </div>
                            <section className="aside-inner-banner">
                                <header>
                                    <h2>딱 3초만 투자하세요</h2>
                                    <p>평소처럼 쇼핑하고, <strong>최대 20% 캐시백</strong>
                                    </p>
                                </header>
                                <button className="buynow-btn">
                                    {/* 버튼 아니면 Link */}
                                    바로 구매하기
                                </button>
                            </section>

                        </aside>
                    </article>
                    <div className='detail-banner'>
                        <p>
                            핫딜 상품은 캐시 적립이 되지 않습니다. 본 상품은 파트너스로부터
                            일정액의 수수료를 제공받고 있습니다.
                        </p>
                    </div>
                    <section className="related-products">
                        <header>
                            <h2> 관련된 다른상품</h2>
                        </header>
                        <div className='slider-content-recommand'>
                            <SliderH items={recommandList} />
                        </div>
                    </section>
                </section>
            </div>
        </main>
    );
}


export async function getServerSideProps(context) {
    const pid = context.params.pid;

    try {
        const getSingleHotDeal = await axios
            .get(`${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/hotdeal/${pid}`)
            .then((result) => {
                return result.data.hotdealitem;
            });
        const getRecommandList = await axios.get(`${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/recommand`).then((result) => {
            return result.data.recommandList;
        });



        return {
            props: {
                singleHotdeal: getSingleHotDeal,
                recommandList: getRecommandList
            },
        };
    } catch (error) {
        console.error("hotdealDetail/getStaticProps[error]: ", error);
    }
}


// export async function getStaticProps(context) {
//     const pid = context.params.pid;

//     try {
//         const getSingleHotDeal = await axios
//             .get(`${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/hotdeal/${pid}`)
//             .then((result) => {
//                 return result.data.hotdealitem;
//             });
//         const getRecommandList = await axios.get(`${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/recommand`).then((result) => {
//             return result.data.recommandList;
//         });



//         return {
//             props: {
//                 singleHotdeal: getSingleHotDeal,
//                 recommandList: getRecommandList
//             },
//         };
//     } catch (error) {
//         console.error("hotdealDetail/getStaticProps[error]: ", error);
//     }
// }




// export async function getStaticPaths() {
//     //dynamic routes needs getStaticPaths

//     try {
//         const getHotDealList = await axios
//             .get(`${process.env.NEXT_PUBLIC_FETCH_URL}itemlist/hotdeal`)
//             .then((result) => {
//                 return result.data.hotdealList;
//             });
//         const paths = getHotDealList.map((el) => {
//             return { params: { pid: el.pid.toString() } };
//         });

//         return {
//             paths,
//             fallback: 'blocking',
//         };
//     } catch (error) {
//         console.error("hotdealDetail/getStaticPaths[error]: ", error);
//     }
// }
