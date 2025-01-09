import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useUserStore } from "@/store/user";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function RouteComponent() {
  const { userName, setUserName } = useUserStore();

  useEffect(() => {
    console.log("check If User");
    checkUser();
  }, [userName]);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    if (user?.user_metadata?.name) {
      setUserName(user?.user_metadata?.name);
    }
  };

  const onLogin = async () => {
    console.log("login");
    const res = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "/admin",
      },
    });
    console.log(res);
  };

  const onLogout = async () => {
    console.log("logout");
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setUserName(null);
  };
  return (
    <div>
      <h1>{userName ? userName : "Not logged in"}</h1>
      <div>
        <button onClick={onLogin}>Login with Google</button>
      </div>
      <div>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});
