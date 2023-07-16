import Header from "../../(Components)/layout/Header";
import Image from "next/image";
import LoginBtn from "../../(Components)/common/LoginBtn";
export default function Login() {
  return (
    <>
      <Header title={"로그인"} />
      <main className='main-login'>
        <div className='login-container'>
          <div className='login-header'>
            <h2>
              <Image
                src='/asset/images/login-title.png'
                alt='캐시나무 타이틀'
                width={230}
                height={45}
              />
            </h2>
            <p>로그인 후 더 많은 혜택을 누리세요 :)</p>
          </div>
          <div className='login-body'>
            <Image
              src='/asset/images/loginbanner.png'
              alt='캐시나무 타이틀'
              width={392}
              height={151}
            />
          </div>
          <div className='login-footer'>
            <h2>간편 로그인</h2>
            <LoginBtn
              title='네이버 아이디로 로그인'
              className='login-btn-naver'
            />
            <LoginBtn
              title='카카오 아이디로 로그인'
              className='login-btn-kakao'
            />
            <LoginBtn
              title='구글 아이디로 로그인'
              className='login-btn-google'
            />
          </div>
        </div>
      </main>
    </>
  );
}
