import { TopicsLayout } from "@/layout/topics_layout/topics_layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/js")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <TopicsLayout />
    </div>
  );
}
