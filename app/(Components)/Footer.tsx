//@ts-nocheck
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="main-footer">
      <nav>
        <ul>
          <li>
            <Link href={"/about"} passHref>
              캐시나무 소개
            </Link>
          </li>
          <li>
            <Link href={"/faq"} passHref>
              FAQ
            </Link>
          </li>
          <li>
            <Link href={"/annoucne"} passHref>
              공지사항
            </Link>
          </li>
          <li>
            <Link href={"/policy"} passHref>
              개인정보처리방침
            </Link>
          </li>
          <li>
            <Link href={"/service"} passHref>
              이용약관
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sub-footer">
        <section className="comp-info">
          <header>
            <h4>캐시나무 대표 이승록</h4>
          </header>

          <address>
            <div>
              <p>사업자등록번호 306-21-61424</p>
              <p>cashnamu@cashnamu.com</p>
            </div>
            <p>
              부산광역시 기장군 정관읍 모전1길 9, 311동 603호
              (정관동일스위트3차)
            </p>
          </address>
          <small>Copyright © CashNamu.co,Ltd. All Rights Reserved.</small>
        </section>
        <section className="cs-info">
          <header>
            <h4>고객센터</h4>
          </header>
          <Link href={"/"} passHref>
            카카오톡 문의
          </Link>
          <p>월~금 9:00 ~ 18:00 (주말, 공휴일 휴무)</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
