// auth.ts (project root, next to package.json)
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { getCollection } from "@/lib/mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      const usersCollection = await getCollection("users");
      const existingUser = await usersCollection.findOne({ email: user.email });

      if (!existingUser) return false;
      if (!existingUser.isActive) return false;

      return true;
    },
    async session({ session }) {
      if (session.user?.email) {
        const usersCollection = await getCollection("users");
        const dbUser = await usersCollection.findOne({ email: session.user.email });

        if (dbUser) {
          session.user.role = dbUser.role;
          session.user.isActive = dbUser.isActive;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});