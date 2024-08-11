import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    if (!token || (token.email as string) !== "admin@admin.com") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (pathname === "/cart" || pathname === "/favorites") {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  if (pathname === "/signin" || pathname === "/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*", "/cart", "/signin", "/register", "/favorites"],
};
