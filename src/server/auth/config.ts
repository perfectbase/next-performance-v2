import { type NextAuthConfig, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import "next-auth/jwt";
import { mockUsers, Role } from "../mock/users";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    name: string;
    username: string;
    role: Role;
  }
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

export function getAuthConfig(): NextAuthConfig {
  return {
    providers: [
      Credentials({
        credentials: {
          username: {},
          password: {},
        },
        authorize: async (credentials) => {
          const username = credentials?.username as string;
          const password = credentials?.password as string;

          const user = mockUsers.find(
            (user) => user.username === username && user.password === password,
          );

          return user ?? null;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }

        return token;
      },
      async session({ session, token }) {
        if (token.user) {
          session.user = {
            ...session.user,
            ...token.user,
          };
        }
        return session;
      },
    },
    pages: {
      signIn: "/signin",
    },
  };
}
