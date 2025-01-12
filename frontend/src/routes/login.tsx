import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useUserStore } from "@/store/user/user";
import { supabase } from "@/main";
import { onLogoutUser } from "@/store/user/utils/logout_user";

function RouteComponent() {
  const { userName, setUserName } = useUserStore();

  const MODE = import.meta.env.MODE;
  console.log({ MODE });

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
    const redirectUrl =
      MODE === "development"
        ? "http://localhost:5173/js"
        : "https://react-bun.onrender.com/js";
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });
  };

  const onLogout = () => {
    console.log("log1");
    onLogoutUser();
  };

  return (
    <div>
      <h1>{MODE}</h1>
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
