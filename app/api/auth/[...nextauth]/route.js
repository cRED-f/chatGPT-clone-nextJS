import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.WEB_ID,
      clientSecret: process.env.WEB_SECRET,
    }),
    // ...add more providers here
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
