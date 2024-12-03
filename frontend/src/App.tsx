import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { API_CLIENT } from "./lib/api";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await API_CLIENT.js_cards["get_cards"].$get();
      const data = await res.json();
      console.log(data.cards);
      setData(data.cards);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-red-100">
        <h1>Data from backend:</h1>
        {data ? "Data" : "No data"}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button variant="outline">Button</Button>
      </div>
    </>
  );
}

export default App;
