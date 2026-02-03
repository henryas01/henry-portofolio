import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  const isBot =
    userAgent.includes("Schema.org") ||
    userAgent.includes("Googlebot") ||
    userAgent.includes("bingbot") ||
    userAgent.includes("DuckDuckBot");

  if (isBot) {
    return NextResponse.next();
  }

  // coming soon pages will be activated later
  if (
    pathname.startsWith("/about") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/customer")
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*", "/admin/:path*", "/customer/:path*"],
};
