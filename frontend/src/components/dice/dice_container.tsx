import { DICE_TILES_ENUM, DICE_TILES_TYPE } from "@/types/dice_types";
import { useDiceStoreV2 } from "@/store/dice/dice_store_v2";
import { DiceContainerV2 } from "./dice_container_v2";
import { DiceTestView } from "./dice_test_view";
import {
  DEFAULT_ATTACK_DICE,
  DEFAULT_DEFENSE_DICE,
  DEFAULT_MAGIC_DICE,
} from "./dice_const";
import { DiceUsedContainer } from "./dice_used_container";
import { useDiceStore } from "@/store/dice/dice_store";
import { DiceTestFile } from "./dice_test_file";

export const DiceContainer = () => {
  const { reset_stats } = useDiceStore();
  const {
    attack_dices,
    set_attack_dices,

    defense_dices,
    set_defense_dices,

    magic_dices,
    set_magic_dices,

    set_reset_all_used_dices,
  } = useDiceStoreV2();

  const onFightStart = () => {
    console.log("Fight");
  };

  const onAddDice = (type: DICE_TILES_TYPE) => {
    set_reset_all_used_dices(true);
    reset_stats();
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
      <DiceTestFile />
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
