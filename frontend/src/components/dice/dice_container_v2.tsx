import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";
import {
  DICE_TILES_ENUM,
  DICE_TILES_TYPE,
  DICE_VALUE_TYPE,
} from "@/types/dice_types";
import { Dice } from "./dice";
import { useState } from "react";

type Props = {
  containerType: DICE_TILES_TYPE;
  dices: DICE_VALUE_TYPE[];
  onAddDice: (type: DICE_TILES_TYPE) => void;
};

export const DiceContainerV2 = ({ containerType, dices, onAddDice }: Props) => {
  const [isDisable, setIsDisable] = useState(false);
  const {
    used_attack_dices,
    set_used_attack_dices,
    used_defense_dices,
    set_used_defense_dices,
    used_magic_dices,
    set_used_magic_dices,
  } = useDiceStoreV2();

  const number_of_dices = dices.length;

  const onRollDice = () => {
    if (containerType === DICE_TILES_ENUM.ATTACK) {
      if (number_of_dices === 1) {
        set_used_attack_dices([dices[0]]);
      }
      if (number_of_dices === used_attack_dices?.length) {
        setIsDisable(true);
      }
    }
    if (containerType === DICE_TILES_ENUM.DEFENSE) {
      if (number_of_dices === 1) {
        set_used_defense_dices([dices[0]]);
      }
    }
    if (containerType === DICE_TILES_ENUM.MAGIC) {
      if (number_of_dices === 1) {
        set_used_magic_dices([dices[0]]);
      }
    }
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
          Add New {containerType} Dice
        </button>
      </div>
    </div>
  );
};
