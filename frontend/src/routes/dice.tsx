import { Dice } from "@/components/dice/dice";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dice")({
  component: RouteComponent,
});

function RouteComponent() {
  const fake_dice = [
    { type: "ATTACK", power: null },
    { type: "ATTACK", power: null },
    { type: "SHIELD", power: null },
    { type: "SHIELD", power: null },
    { type: "MAGIC", power: null },
    { type: "MAGIC", power: null },
  ];
  return (
    <div>
      <Dice tiles={fake_dice} />
    </div>
  );
}
