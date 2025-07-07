import NextAuth from "next-auth";
import { getAuthConfig } from "./config";

const { auth, handlers, signIn, signOut } = NextAuth(getAuthConfig());

export { auth, handlers, signIn, signOut };
