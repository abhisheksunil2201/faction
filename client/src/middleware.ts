import { reportWebVitals } from "next/dist/build/templates/pages";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const sessionCookie = req.cookies.get("session-id");

  let path = req.nextUrl.pathname;

  if (!sessionCookie && path !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (sessionCookie && (path === "/login" || path === "/signup")) {
    return NextResponse.redirect(new URL("/channels/me", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/channels/me", "/login"],
};
