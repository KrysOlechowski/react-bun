import { supabase } from "@/main";

export const onLogoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
  }
  console.log("Something went wrong with logout");
};
