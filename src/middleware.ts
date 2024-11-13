import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({req, res});
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  const path = req.nextUrl.pathname;

  if (!session && !["/", "/sign-in", "/sign-up"].includes(path)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  return res;
}

export const config = {
  matcher: "/((?!api|auth|static|_next/|favicon.ico).*)",
};