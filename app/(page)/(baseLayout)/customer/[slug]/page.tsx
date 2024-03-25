//@ts-nocheck
import React from "react";
import { getNotice } from "@/app/(http)/apis/customerApi";
import "../../../../../styles/components/noticeDetail.scss";
import Link from "next/link";

async function getData(idx) {
  const noticeData = await getNotice({'idx' : idx});

  return noticeData;
}

// const testData = [
//   {
//     idx: 2,
//     title: '캐시나무가 런칭 되었습니다222. ',
//     content: 
//       '<p>안녕하세요 캐시나무 고객 여러분! 어느덧 쌀쌀했던 바람이 걷히고, 바람이 따뜻한 봄이 왔습니다. </p><p><br></p><p>캐시나무팀은 모든 소비자에게 멋진 쇼핑 경험을 선사하자는 목표로 2019년 시작 하게 되었습니다. </p><p>캐시나무가 쇼핑 경험에 있어서 가장 중요 하다고 생각 하는 것은 \'편리함, 뜻밖의 행운\' 이라고 생각 합니다. </p><p>평소와 같이 쇼핑 하고 캐시백의 행운을 드리고자 합니다. 캐시나무의 캐시백 방법은 다음과 같습니다. </p><p><br></p><p>1. 캐시나무를 경유 해서 평소 즐겨 찾는 쇼핑몰 이동 </p><p>2. 쇼핑몰에서 평소와 같이 쇼핑 </p><p>3. 구매 확정 시, 캐시백 캐시백을 통해 돌려 받은 캐시는 계좌 환급을 받거나, 포인트샵에서 쿠폰으로 교환 하여 사용 하실 수 있습니다. </p><p><br></p><p>클릭 한번으로 바뀌는 기막힌 쇼핑 경험을 해보세요~! </p><p>더욱 즐거운 쇼핑경험을 선사하기 위해, 항상 노력 하는 캐시나무가 되겠습니다.</p><p> 감사합니다.</p>',
//     view: 85,
//     createDate: '2023-03-24T00:47:58'
//   },
  
//   {
//     idx: 4,
//     title: '캐시나무가 런칭 되었습니다444 ',
//     content: 
//       '<p>안녕하세요 캐시나무 고객 여러분! 어느덧 쌀쌀했던 바람이 걷히고, 바람이 따뜻한 봄이 왔습니다. </p><p><br></p><p>캐시나무팀은 모든 소비자에게 멋진 쇼핑 경험을 선사하자는 목표로 2019년 시작 하게 되었습니다. </p><p>캐시나무가 쇼핑 경험에 있어서 가장 중요 하다고 생각 하는 것은 \'편리함, 뜻밖의 행운\' 이라고 생각 합니다. </p><p>평소와 같이 쇼핑 하고 캐시백의 행운을 드리고자 합니다. 캐시나무의 캐시백 방법은 다음과 같습니다. </p><p><br></p><p>1. 캐시나무를 경유 해서 평소 즐겨 찾는 쇼핑몰 이동 </p><p>2. 쇼핑몰에서 평소와 같이 쇼핑 </p><p>3. 구매 확정 시, 캐시백 캐시백을 통해 돌려 받은 캐시는 계좌 환급을 받거나, 포인트샵에서 쿠폰으로 교환 하여 사용 하실 수 있습니다. </p><p><br></p><p>클릭 한번으로 바뀌는 기막힌 쇼핑 경험을 해보세요~! </p><p>더욱 즐거운 쇼핑경험을 선사하기 위해, 항상 노력 하는 캐시나무가 되겠습니다.</p><p> 감사합니다.</p>',
//     view: 85,
//     createDate: '2023-03-24T00:47:58'
//   },
  
//   {
//     idx: 5,
//     title: '캐시나무가 런칭 되었습니다5555. ',
//     content: 
//       '<p>안녕하세요 캐시나무 고객 여러분! 어느덧 쌀쌀했던 바람이 걷히고, 바람이 따뜻한 봄이 왔습니다. </p><p><br></p><p>캐시나무팀은 모든 소비자에게 멋진 쇼핑 경험을 선사하자는 목표로 2019년 시작 하게 되었습니다. </p><p>캐시나무가 쇼핑 경험에 있어서 가장 중요 하다고 생각 하는 것은 \'편리함, 뜻밖의 행운\' 이라고 생각 합니다. </p><p>평소와 같이 쇼핑 하고 캐시백의 행운을 드리고자 합니다. 캐시나무의 캐시백 방법은 다음과 같습니다. </p><p><br></p><p>1. 캐시나무를 경유 해서 평소 즐겨 찾는 쇼핑몰 이동 </p><p>2. 쇼핑몰에서 평소와 같이 쇼핑 </p><p>3. 구매 확정 시, 캐시백 캐시백을 통해 돌려 받은 캐시는 계좌 환급을 받거나, 포인트샵에서 쿠폰으로 교환 하여 사용 하실 수 있습니다. </p><p><br></p><p>클릭 한번으로 바뀌는 기막힌 쇼핑 경험을 해보세요~! </p><p>더욱 즐거운 쇼핑경험을 선사하기 위해, 항상 노력 하는 캐시나무가 되겠습니다.</p><p> 감사합니다.</p>',
//     view: 85,
//     createDate: '2023-03-24T00:47:58'
//   },
  
//   {
//     idx: 1,
//     title: '캐시나무가 런칭 되었습니다111. ',
//     content: 
//       '<p>안녕하세요 캐시나무 고객 여러분! 어느덧 쌀쌀했던 바람이 걷히고, 바람이 따뜻한 봄이 왔습니다. </p><p><br></p><p>캐시나무팀은 모든 소비자에게 멋진 쇼핑 경험을 선사하자는 목표로 2019년 시작 하게 되었습니다. </p><p>캐시나무가 쇼핑 경험에 있어서 가장 중요 하다고 생각 하는 것은 \'편리함, 뜻밖의 행운\' 이라고 생각 합니다. </p><p>평소와 같이 쇼핑 하고 캐시백의 행운을 드리고자 합니다. 캐시나무의 캐시백 방법은 다음과 같습니다. </p><p><br></p><p>1. 캐시나무를 경유 해서 평소 즐겨 찾는 쇼핑몰 이동 </p><p>2. 쇼핑몰에서 평소와 같이 쇼핑 </p><p>3. 구매 확정 시, 캐시백 캐시백을 통해 돌려 받은 캐시는 계좌 환급을 받거나, 포인트샵에서 쿠폰으로 교환 하여 사용 하실 수 있습니다. </p><p><br></p><p>클릭 한번으로 바뀌는 기막힌 쇼핑 경험을 해보세요~! </p><p>더욱 즐거운 쇼핑경험을 선사하기 위해, 항상 노력 하는 캐시나무가 되겠습니다.</p><p> 감사합니다.</p>',
//     view: 85,
//     createDate: '2023-03-24T00:47:58'
//   }
// ]

const page = async ({ params }: { params: { idx: string } }) => {
  // const testpageNumber = Number(params.slug)
  console.log('a');
  
  const pageNumber = Number(params.slug);
  const data = await getData(pageNumber);

  const dataList = data.noticeList.content;
  // const dataList = testData;
  const currentNumber = dataList.findIndex((el) => el.idx === pageNumber);

  const nextIdx = dataList.length > currentNumber+1 ? currentNumber+1 : undefined;
  const nextData = nextIdx !== undefined ? dataList[nextIdx] : { title: '다음 글이 없습니다.', view: null}
  
  const prevIdx = currentNumber > 0 ? currentNumber-1 : undefined;
  const prevData = prevIdx !== undefined ? dataList[prevIdx] : { title: '이전 글이 없습니다.', view: null}
  // pageNumber === 0;
  const currentData = data.noticeDTO;
  return (
    <section className="notice-view">
      <h3>공지사항</h3>
      <header>
        <strong>{currentData.title}</strong>
        <p>{currentData.createDate}</p>
      </header>
      <div
        className="notice-view_content"
        dangerouslySetInnerHTML={{
          __html: currentData.content,
        }}/>

      <ul>
        <li><Link href={prevIdx !== undefined ? `/customer/${prevData.idx}` : ''}><b>이전글</b>{prevData.title}</Link></li>
        <li><Link href={nextIdx !== undefined ? `/customer/${nextData.idx}` : ''}><b>다음글</b>{nextData.title}</Link></li>
      </ul>
    </section>
  );
};

export default page;
