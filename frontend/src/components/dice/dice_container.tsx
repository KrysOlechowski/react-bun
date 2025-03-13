import { useDiceStore } from "@/store/dice/dice_store";
import { Dice } from "./dice";

import { DiceRemove } from "./dice_remove";

export const DiceContainer = () => {
  const {
    number_of_rolls,
    increment_number_of_rolls,
    reset_number_of_rolls,
    toggle_test_mode,
    number_of_attack,
    number_of_defense,
    number_of_magic,
    reset_stats,
    dices,
  } = useDiceStore();
  console.log({ number_of_attack });

  return (
    <>
      <DiceRemove />
      <div className="p-2">
        <button
          onClick={reset_stats}
          className="m-1 p-2.5 top-1 left-80 border-4 border-gray-600"
        >
          Reset Stats
        </button>
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
      <div className="p-2">
        <div>
          <span></span>
        </div>
        <div>
          <span>ATTACK: </span>
          <span>{number_of_attack}</span>
        </div>
        <div>
          <span>DEFENSE: </span>
          <span>{number_of_defense}</span>
        </div>
        <div>
          <span>MAGIC: </span>
          <span>{number_of_magic}</span>
        </div>
      </div>
      <div className="flex">
        {dices.map((dice) => {
          return <Dice key={dice.index} dice={dice} />;
        })}
      </div>
      {/* <div className="flex">
        <Dice dice={DEFAULT_USER_DICE1} />
        <Dice dice={DEFAULT_USER_DICE2} />
        <Dice dice={DEFAULT_USER_DICE3} />
      </div> */}
    </>
  );
};
