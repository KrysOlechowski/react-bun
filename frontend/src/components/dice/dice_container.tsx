import { useDiceStore } from "@/store/dice/dice_store";
import { Dice } from "./dice";
import {
  DEFAULT_USER_DICE1,
  DEFAULT_USER_DICE2,
  DEFAULT_USER_DICE3,
} from "./dice_const";

export const DiceContainer = () => {
  const {
    number_of_rolls,
    increment_number_of_rolls,
    reset_number_of_rolls,
    toggle_test_mode,
  } = useDiceStore();
  return (
    <>
      <div className="p-2">
        <button
          onClick={reset_number_of_rolls}
          className="m-1 p-2.5 top-1 left-16 border-4 border-gray-600"
        >
          Reset number of rolls
        </button>
        <button
          onClick={increment_number_of_rolls}
          className="m-1 p-2.5 top-1 left-80 border-4 border-gray-600"
        >
          Roll The Dice: {number_of_rolls}
        </button>
        <button
          onClick={toggle_test_mode}
          className="m-1 p-2.5 top-1 left-80 border-4 border-gray-600"
        >
          Test Mode
        </button>
      </div>
      <div className="flex">
        <Dice dice={DEFAULT_USER_DICE1} />
        <Dice dice={DEFAULT_USER_DICE2} />
        <Dice dice={DEFAULT_USER_DICE3} />
      </div>
    </>
  );
};
