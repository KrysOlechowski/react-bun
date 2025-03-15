import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";
import {
  DICE_TILES_ENUM,
  DICE_TILES_TYPE,
  DICE_VALUE_TYPE,
} from "@/types/dice_types";
import { Dice } from "./dice";
import { useEffect, useState } from "react";
import { getShuffledArrayItems } from "@/utils/arrays";
import { useDiceStore } from "@/store/dice/dice_store";

type Props = {
  containerType: DICE_TILES_TYPE;
  dices: DICE_VALUE_TYPE[];
  onAddDice: (type: DICE_TILES_TYPE) => void;
};

export const DiceContainerV2 = ({ containerType, dices, onAddDice }: Props) => {
  const [is_button_active, set_is_button_active] = useState(true);

  const { inc_number_of_attack, inc_number_of_defense, inc_number_of_magic } =
    useDiceStore();
  const {
    attack_dices,
    used_attack_dices,
    set_used_attack_dices,

    defense_dices,
    used_defense_dices,
    set_used_defense_dices,

    magic_dices,
    used_magic_dices,
    set_used_magic_dices,

    is_reset_used_dices,
    set_reset_all_used_dices,
  } = useDiceStoreV2();

  useEffect(() => {
    if (is_reset_used_dices) {
      set_is_button_active(true);
      set_temp_used_attack_dices(null);
      set_temp_used_defense_dices(null);
      set_temp_used_magic_dices(null);

      set_reset_all_used_dices(false);
    }
  }, [is_reset_used_dices]);

  const [temp_used_attack_dices, set_temp_used_attack_dices] = useState<
    null | DICE_VALUE_TYPE[]
  >(null);
  const [temp_used_defense_dices, set_temp_used_defense_dices] = useState<
    null | DICE_VALUE_TYPE[]
  >(null);
  const [temp_used_magic_dices, set_temp_used_magic_dices] = useState<
    null | DICE_VALUE_TYPE[]
  >(null);

  const number_of_dices = dices.length;

  const onRollDice = () => {
    if (containerType === DICE_TILES_ENUM.ATTACK) {
      if (!temp_used_attack_dices) {
        const copiedArray = [...attack_dices];
        const shuffledArray = getShuffledArrayItems(copiedArray);
        const randomFromShuffled = shuffledArray.pop();
        if (randomFromShuffled) {
          set_temp_used_attack_dices(shuffledArray);
          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];
          randomFromShuffled &&
            set_used_attack_dices([
              {
                ...randomFromShuffled,
                rolled_value: randomTile.value,
              },
            ]);
          inc_number_of_attack(randomTile.value);
        }
      } else {
        const copiedArray = used_attack_dices ? [...used_attack_dices] : [];
        const copiedTempArray = [...temp_used_attack_dices];

        const randomFromShuffled = copiedTempArray.pop();
        if (randomFromShuffled) {
          set_temp_used_attack_dices(copiedTempArray);

          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];
          console.log(randomTile);
          randomFromShuffled &&
            set_used_attack_dices([
              ...copiedArray,
              { ...randomFromShuffled, rolled_value: randomTile.value },
            ]);
          inc_number_of_attack(randomTile.value);
        }
      }
    }
    if (containerType === DICE_TILES_ENUM.DEFENSE) {
      if (!temp_used_defense_dices) {
        const copiedArray = [...defense_dices];
        const shuffledArray = getShuffledArrayItems(copiedArray);
        const randomFromShuffled = shuffledArray.pop();
        if (randomFromShuffled) {
          set_temp_used_defense_dices(shuffledArray);

          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];

          randomFromShuffled &&
            set_used_defense_dices([
              { ...randomFromShuffled, rolled_value: randomTile.value },
            ]);
          inc_number_of_defense(randomTile.value);
        }
      } else {
        const copiedArray = used_defense_dices ? [...used_defense_dices] : [];
        const copiedTempArray = [...temp_used_defense_dices];

        const randomFromShuffled = copiedTempArray.pop();
        if (randomFromShuffled) {
          set_temp_used_defense_dices(copiedTempArray);

          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];
          randomFromShuffled &&
            set_used_defense_dices([
              ...copiedArray,
              { ...randomFromShuffled, rolled_value: randomTile.value },
            ]);
          inc_number_of_defense(randomTile.value);
        }
      }
    }
    if (containerType === DICE_TILES_ENUM.MAGIC) {
      if (!temp_used_magic_dices) {
        const copiedArray = [...magic_dices];
        const shuffledArray = getShuffledArrayItems(copiedArray);
        const randomFromShuffled = shuffledArray.pop();
        if (randomFromShuffled) {
          set_temp_used_magic_dices(shuffledArray);
          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];
          randomFromShuffled &&
            set_used_magic_dices([
              { ...randomFromShuffled, rolled_value: randomTile.value },
            ]);
          inc_number_of_magic(randomTile.value);
        }
      } else {
        const copiedArray = used_magic_dices ? [...used_magic_dices] : [];
        const copiedTempArray = [...temp_used_magic_dices];

        const randomFromShuffled = copiedTempArray.pop();
        if (randomFromShuffled) {
          const randomTile =
            randomFromShuffled.values[
              Math.floor(Math.random() * randomFromShuffled.values.length)
            ];

          set_temp_used_magic_dices(copiedTempArray);
          randomFromShuffled &&
            set_used_magic_dices([
              ...copiedArray,
              { ...randomFromShuffled, rolled_value: randomTile.value },
            ]);
          inc_number_of_magic(randomTile.value);
        }
      }
    }
  };

  if (
    number_of_dices === used_attack_dices?.length &&
    is_button_active &&
    containerType === DICE_TILES_ENUM.ATTACK
  ) {
    set_is_button_active(false);
  }
  if (
    number_of_dices === used_defense_dices?.length &&
    is_button_active &&
    containerType === DICE_TILES_ENUM.DEFENSE
  ) {
    set_is_button_active(false);
  }
  if (
    number_of_dices === used_magic_dices?.length &&
    is_button_active &&
    containerType === DICE_TILES_ENUM.MAGIC
  ) {
    set_is_button_active(false);
  }

  return (
    <div className="w-[33%]">
      <div className="flex flex-wrap justify-center">
        {dices.map((dice) => {
          return <Dice key={dice.type + dice.index} dice={dice} />;
        })}
      </div>

      <div className="absolute p-2 ">
        {is_button_active ? (
          <button className="border-red-100 border-2 m-2" onClick={onRollDice}>
            Roll {containerType} Dice
          </button>
        ) : (
          <button>NO POWER</button>
        )}
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
