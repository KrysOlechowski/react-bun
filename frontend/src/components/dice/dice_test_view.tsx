import { useDiceStore } from "@/store/dice/dice_store";

export const DiceTestView = () => {
  const {
    number_of_rolls,
    increment_number_of_rolls,
    reset_number_of_rolls,
    toggle_test_mode,
    number_of_attack,
    number_of_defense,
    number_of_magic,
    reset_stats,
  } = useDiceStore();

  return (
    <>
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
          Roll All Dices: {number_of_rolls}
        </button>
        <button
          onClick={toggle_test_mode}
          className="m-1 p-2.5 top-1 left-80 border-4 border-gray-600"
        >
          Test Mode
        </button>
        <button
          onClick={toggle_test_mode}
          className="m-1 p-2.5 top-1 left-80 border-4 border-gray-600"
        >
          Test Mode
        </button>
      </div>

      <div className="p-2 flex">
        <div className="p-2">
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
      </div>
    </>
  );
};
