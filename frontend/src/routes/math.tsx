import { MathContainer } from "@/math/components/math_container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/math")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MathContainer />
    </>
  );
}
