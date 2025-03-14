import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";
import { DICE_TILES_TYPE, DICE_VALUE_TYPE } from "@/types/dice_types";
import { Dice } from "./dice";

type Props = {
  containerType: DICE_TILES_TYPE;
  dices: DICE_VALUE_TYPE[];
  onAddDice: (type: DICE_TILES_TYPE) => void;
};

export const DiceContainerV2 = ({ containerType, dices, onAddDice }: Props) => {
  const {} = useDiceStoreV2();

  const onRollDice = () => {
    console.log("ROLL");
  };

  console.log(dices);

  return (
    <div className="w-[33%]">
      <div className="flex flex-wrap justify-center">
        {dices.map((dice) => {
          return <Dice key={dice.type + dice.index} dice={dice} />;
        })}
      </div>

      <div className="absolute p-2 ">
        <button className="border-red-100 border-2 m-2" onClick={onRollDice}>
          Roll {containerType} Dice
        </button>
        <button
          className="border-red-100 border-2 m-2"
          onClick={() => onAddDice(containerType)}
        >
          Add {containerType} Dice
        </button>
      </div>
    </div>
  );
};
