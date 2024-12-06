import { Button } from "@/components/ui/button";
import JS_Sidebar from "@/layout/js_sidebar/js_sidebar";
import React_Sidebar from "@/layout/react-sidebar/react_sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

function UITestRoute() {
  const [is_JS_open, set_JS_Open] = useState(false);
  const [is_React_open, set_React_Open] = useState(false);

  return (
    <>
      <h1>Sidebar</h1>
      <div
        style={{
          border: "1px solid green",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button onClick={() => set_JS_Open((prev) => !prev)}>
          JavaScript Topics
        </Button>
        <Button onClick={() => set_React_Open((prev) => !prev)}>
          React Topics
        </Button>
      </div>
      <JS_Sidebar isOpen={is_JS_open}></JS_Sidebar>

      <React_Sidebar isOpen={is_React_open}>
        <div>React</div>
      </React_Sidebar>
    </>
  );
}

export const Route = createFileRoute("/ui-test")({
  component: UITestRoute,
});
