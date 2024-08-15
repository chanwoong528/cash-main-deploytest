import { Session } from "inspector";
import NextAuth from "next-auth/next";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? "",
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log("callback : jwt>> ", token, user);

      //naver:>
      // email: 'cksdnd004@naver.com',
      // sub: '29530692',
      // iat: 1723360708,
      // exp: 1725952708,
      // jti: 'e9aebdb5-324d-4f5d-a34b-2d5c8c1710b9'

      return token;
    },
    session: async ({ session, token }) => {
      console.log("callback : session>> ", session, token);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
