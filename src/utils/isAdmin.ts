import { Session } from "@supabase/supabase-js";

export function isAdmin(session: Session | null): boolean {
  const email = session?.user?.email?.toLowerCase() || "";
  return (
    session?.user?.role === "admin" ||
    email === "wikus77@hotmail.it" ||
    email.endsWith("@m1ssion.com")
  );
}
