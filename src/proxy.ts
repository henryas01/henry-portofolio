import { NextResponse, NextRequest } from 'next/server'


export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Disable admin & customer redirection to home page currently
  if (pathname.startsWith("/admin") || pathname.startsWith("/customer")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();

}

export const config = {
   matcher: ["/about/:path*", "/admin/:path*", "/customer/:path*"],
};
