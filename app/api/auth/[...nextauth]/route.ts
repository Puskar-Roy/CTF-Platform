import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProviderConfig } from "@/interfaces";
import connect from "@/utlis/db";
import User from "@/models/userSchema";
import { Account, User as AuthUser } from "next-auth";
const handeler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as GoogleProviderConfig),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "google") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              name:user.name,
              image:user.image,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  },
});

export { handeler as GET, handeler as POST };
