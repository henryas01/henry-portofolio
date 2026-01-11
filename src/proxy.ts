import { NextResponse, NextRequest } from 'next/server'


export function proxy(request: NextRequest) {
   const ua = request.headers.get("user-agent") || "";

  if (ua.includes("Googlebot")) {
    return NextResponse.next();
  }
  if (request.nextUrl.pathname.startsWith('/about')  || request.nextUrl.pathname === '/' ||request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/customer')  ) {

    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: '/about/:path*',
// }
