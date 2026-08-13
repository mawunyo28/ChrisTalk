import { createClient } from "@/app/utils/supabase/server";
import { cookies } from "next/headers";

async function signin(email: string, password: string) {
  let cookieStore = await cookies();

  const client = createClient(cookieStore);

  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
}

async function signup(email: string, password: string) {
  let cookieStore = await cookies();

  const client = createClient(cookieStore);

  const { data, error } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return { data, error };
}
