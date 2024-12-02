import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/expenses");
      const data = await res.json();
      console.log(data);
      setData(data);
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
