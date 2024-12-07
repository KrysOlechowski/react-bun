import { Button } from "@/components/ui/button";
import JS_Sidebar from "@/layout/js_sidebar/js_sidebar";
import React_Sidebar from "@/layout/react-sidebar/react_sidebar";
import { TopicsLayout } from "@/layout/topics_layout/topics_layout";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

function UITestRoute() {
  const [is_JS_open, set_JS_Open] = useState(false);
  const [is_React_open, set_React_Open] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => set_JS_Open((prev) => !prev)}>
          JavaScript Topics
        </Button>
        <Button onClick={() => set_React_Open((prev) => !prev)}>
          React Topics
        </Button>
      </div>

      <TopicsLayout />
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
