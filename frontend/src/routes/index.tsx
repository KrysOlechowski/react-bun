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
        <Button variant="outline">Button</Button>
      </div>
    </>
  );
}
