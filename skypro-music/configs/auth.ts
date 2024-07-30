import { fetchTokens, fetchUser } from "@/api/userApi";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
    username: string;
  }

  interface Session {
    accessToken: string;
    refreshToken: string;
    user: {
      name: string;
      email: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const tokens = await fetchTokens({ email: credentials.email, password: credentials.password });
          if (tokens) {
            const user = await fetchUser({ email: credentials.email, password: credentials.password });
            return { ...user, accessToken: tokens.access, refreshToken: tokens.refresh };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.username as string;
        token.accessToken = user.accessToken as string;
        token.refreshToken = user.refreshToken as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    }
  },
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET
};