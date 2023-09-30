import LoginHref from "@/app/(Components)/Buttons/LoginHref";
import Image from "next/image";
// import LoginBtn from "../../(Components)/common/LoginBtn";
export default function Page() {
  return <>
    <div className="login-container">
      <div className="login-header">
        <h2>
          <Image
            src="/asset/images/login-title.png"
            alt="캐시나무 타이틀"
            width={230}
            height={45}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </h2>
        <p>로그인 후 더 많은 혜택을 누리세요 :)</p>
      </div>
      <div className="login-body">
        <Image
          src="/asset/images/loginbanner.png"
          alt="캐시나무 타이틀"
          width={392}
          height={151}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <div className="login-footer">
        <h2>간편 로그인</h2>

        <LoginHref
          title="네이버 아이디로 로그인"
          className="login-btn-naver"
          href="/"
        />
        <LoginHref
          title="카카오 아이디로 로그인"
          className="login-btn-kakao"
          href="/"
        />
        <LoginHref
          title="구글 아이디로 로그인"
          className="login-btn-google"
          href="/"
        />
      </div>
    </div>
  </>;
}
