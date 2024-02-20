import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProviderConfig } from "@/interfaces";

const handeler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as GoogleProviderConfig),
  ],
});

export { handeler as GET, handeler as POST };
