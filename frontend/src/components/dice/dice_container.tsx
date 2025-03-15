import { useDiceStore } from "@/store/dice/dice_store";
import { Dice } from "./dice";

import {
  DICE_TILES_ENUM,
  DICE_TILES_TYPE,
  DICE_VALUE_TYPE,
} from "@/types/dice_types";
import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";
import { DiceContainerV2 } from "./dice_container_v2";
import { DiceTestView } from "./dice_test_view";
import {
  DEFAULT_ATTACK_DICE,
  DEFAULT_DEFENSE_DICE,
  DEFAULT_MAGIC_DICE,
} from "./dice_const";
import { DiceUsedContainer } from "./dice_used_container";

export const DiceContainer = () => {
  const {
    default_attack_dice,
    number_of_attack_dices,
    attack_dices,
    set_attack_dices,
    used_attack_dices,

    default_defense_dice,
    number_of_defense_dices,
    defense_dices,
    set_defense_dices,
    used_defense_dices,

    default_magic_dice,
    number_of_magic_dices,
    magic_dices,
    set_magic_dices,
    used_magic_dices,

    default_hero_dice,
    number_of_hero_dices,
    hero_dices,
    used_hero_dices,
  } = useDiceStoreV2();

  const onFightStart = () => {
    console.log("Fight");
  };

  const onAddDice = (type: DICE_TILES_TYPE) => {
    if (type === DICE_TILES_ENUM.ATTACK) {
      const newDice = { ...DEFAULT_ATTACK_DICE, index: attack_dices.length };
      set_attack_dices([...attack_dices, newDice]);
    }
    if (type === DICE_TILES_ENUM.DEFENSE) {
      const newDice = { ...DEFAULT_DEFENSE_DICE, index: defense_dices.length };
      set_defense_dices([...defense_dices, newDice]);
    }
    if (type === DICE_TILES_ENUM.MAGIC) {
      const newDice = { ...DEFAULT_MAGIC_DICE, index: magic_dices.length };

      set_magic_dices([...magic_dices, newDice]);
    }
  };

  return (
    <>
      <DiceTestView />
      <DiceUsedContainer />
      <div className="p-2 flex">
        <DiceContainerV2
          containerType={DICE_TILES_ENUM.ATTACK}
          dices={attack_dices}
          onAddDice={onAddDice}
        />
        <DiceContainerV2
          containerType={DICE_TILES_ENUM.DEFENSE}
          dices={defense_dices}
          onAddDice={onAddDice}
        />
        <DiceContainerV2
          containerType={DICE_TILES_ENUM.MAGIC}
          dices={magic_dices}
          onAddDice={onAddDice}
        />
      </div>
    </>
  );
};
