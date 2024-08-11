import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Admin sayfasına erişim kontrolü
  if (pathname.startsWith("/admin")) {
    if (!token || (token.email as string) !== "admin@admin.com") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Sepet sayfasına erişim kontrolü
  if (pathname === "/cart") {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  // Giriş ve kayıt sayfalarına erişim kontrolü
  if (pathname === "/signin" || pathname === "/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/cart", "/signin", "/register"],
};
