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
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

  //console.log("problem")

export { handler as GET, handler as POST };
