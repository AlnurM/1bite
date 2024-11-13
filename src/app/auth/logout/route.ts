import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const cookieStore = await cookies();
  // @ts-ignore 
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  await supabase
    .auth
    .signOut();
  return NextResponse.redirect(url.origin, { status: 301 })
}