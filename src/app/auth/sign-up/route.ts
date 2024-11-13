import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const cookieStore = await cookies();

  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  // @ts-ignore 
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data, error } = await supabase
    .auth
    .signUp({ 
      email, password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      }
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  if (data.user) {
    const { error: insertError } = await supabase
      .from("user")
      .insert([{ email: data.user.email }]);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 400 });
    }
  }

  return NextResponse.redirect(url.origin, { status: 301 })
}