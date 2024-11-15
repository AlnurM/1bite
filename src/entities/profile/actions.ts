"use server"

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { supabase } from "@/shared/lib/supabase";
import { IProfileDetails } from "./types";

export async function saveDetails(form: IProfileDetails) {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get('sb-sclnbvshuqvuuyxwpknp-auth-token')
  const user = jwtDecode(JSON.parse(cookieToken?.value || '')?.[0]) as any
  const { data, error } = await supabase
    .from('user')
    .update(form)
    .eq('email', user?.email)
    .select()
        
  console.log(data)
}