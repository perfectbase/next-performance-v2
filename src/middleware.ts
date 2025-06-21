import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./server/auth";

const SIGNIN_PATH = "/signin";
const HOME_PATH = "/";

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const isSigninPath = request.nextUrl.pathname === SIGNIN_PATH;
  if (!session && !isSigninPath) {
    return NextResponse.redirect(new URL(SIGNIN_PATH, request.url));
  } else if (session && isSigninPath) {
    return NextResponse.redirect(new URL(HOME_PATH, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
