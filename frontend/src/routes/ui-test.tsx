import { Button } from "@/components/ui/button";
import JS_Sidebar from "@/layout/js_sidebar";
import React_Sidebar from "@/layout/react_sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

function UITestRoute() {
  const [is_JS_open, set_JS_Open] = useState(false);
  const openJSSidebar = () => {
    console.log("Open JS Sidebar");
    set_JS_Open((prev) => !prev);
  };

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
        <Button onClick={openJSSidebar}>Open JS Sidebar</Button>
      </div>
      <JS_Sidebar isOpen={is_JS_open}></JS_Sidebar>

      <React_Sidebar>
        <div>React</div>
      </React_Sidebar>
    </>
  );
}

export const Route = createFileRoute("/ui-test")({
  component: UITestRoute,
});
