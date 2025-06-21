import NextAuth from "next-auth";
import { cache } from "react";
import { getAuthConfig } from "./config";

const {
  auth: uncachedAuth,
  handlers,
  signIn,
  signOut,
} = NextAuth(getAuthConfig());

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };
