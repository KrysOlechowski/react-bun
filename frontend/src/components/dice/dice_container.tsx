import { useDiceStore } from "@/store/dice/dice_store";
import { Dice } from "./dice";
import {
  DEFAULT_USER_DICE1,
  DEFAULT_USER_DICE2,
  DEFAULT_USER_DICE3,
} from "./dice_const";

export const DiceContainer = () => {
  const { number_of_rolls, increment_number_of_rolls, reset_number_of_rolls } =
    useDiceStore();
  return (
    <>
      <button
        onClick={increment_number_of_rolls}
        className="absolute p-2.5 top-1 left-80 border-4 border-gray-600"
      >
        Roll The Dice: {number_of_rolls}
      </button>
      <h3 className="mb-20">1:</h3>
      <Dice dice={DEFAULT_USER_DICE1} />
      <h3>2:</h3>
      <Dice dice={DEFAULT_USER_DICE2} />
      <h3>3:</h3>
      <Dice dice={DEFAULT_USER_DICE3} />
      <button
        onClick={reset_number_of_rolls}
        className="absolute p-2.5 top-1 left-16 border-4 border-gray-600"
      >
        Reset number of rolls
      </button>
    </>
  );
};
