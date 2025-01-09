import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { API_CLIENT } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: IndexRoute,
});

async function getJSCards() {
  const res = await API_CLIENT.js_cards["get_cards"].$get();
  if (!res.ok) {
    throw new Error("Server Error");
  }
  const data = await res.json();
  return data.cards;
}

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const onLogin = async () => {
  console.log("login");
  const res = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  console.log(res);
};

const onLogout = async () => {
  console.log("logout");
  const { error } = await supabase.auth.signOut();
  console.log(error);
};

const {
  data: { user },
} = await supabase.auth.getUser();

function IndexRoute() {
  const [count, setCount] = useState(0);

  const { data } = useQuery({
    queryKey: ["get_js_cards"],
    queryFn: getJSCards,
  });

  return (
    <>
      <div className="bg-red-100">
        <h1>Data from backend:</h1>
        {data?.length
          ? data.map((el) => {
              return (
                <div key={el.id}>
                  <span className="m-2 border-l-rose-900">{el.name}</span>
                  <span className="m-2 border-l-rose-900">{el.lol}</span>
                  <span className="m-2 border-l-rose-900">{el.id}</span>
                </div>
              );
            })
          : "No data"}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>{user ? user.email : "Not logged in"}</h1>
        <Button onClick={onLogin} variant="outline">
          Login
        </Button>
        <Button onClick={onLogout} variant="outline">
          Logout
        </Button>
      </div>
    </>
  );
}
