import { MathMainView } from "@/math/views/math_main_view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/math")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div></div>
      <MathMainView />
      <div></div>
    </>
  );
}
