import { DiceContainer } from "@/components/dice/dice_container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dice")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <DiceContainer />
    </div>
  );
}
