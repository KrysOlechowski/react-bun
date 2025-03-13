import { useDiceStore } from "@/store/dice/dice_store";
import { DICE_VALUE_TYPE } from "@/types/dice_types";

export function useAddStatsFromDice(tile?: DICE_VALUE_TYPE) {
  const { inc_number_of_attack, inc_number_of_defense, inc_number_of_magic } =
    useDiceStore();
  if (!tile) {
    return;
  }
  if (tile.name === "ATTACK") {
    console.log("INC ATTACK");
    inc_number_of_attack(33);
  }
  if (tile.name === "DEFENSE") {
    inc_number_of_defense(33);
  }
  if (tile.name === "MAGIC") {
    inc_number_of_magic(33);
  }
}
