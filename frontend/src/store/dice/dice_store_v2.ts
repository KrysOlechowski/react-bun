import {
  DEFAULT_ATTACK_DICE,
  DEFAULT_DEFENSE_DICE,
  DEFAULT_MAGIC_DICE,
} from "@/components/dice/dice_const";
import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { create } from "zustand";

interface useDiceStore_Type {
  // ATTACK:
  default_attack_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_attack_dices: number;
  attack_dices: DICE_VALUE_TYPE[];
  set_attack_dices: (dices: DICE_VALUE_TYPE[]) => void;
  used_attack_dices: null | DICE_VALUE_TYPE[];

  // DEFENSE:
  default_defense_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_defense_dices: number;
  defense_dices: DICE_VALUE_TYPE[];
  set_defense_dices: (dices: DICE_VALUE_TYPE[]) => void;
  used_defense_dices: null | DICE_VALUE_TYPE[];

  // MAGIC:
  default_magic_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_magic_dices: number;
  magic_dices: DICE_VALUE_TYPE[];
  set_magic_dices: (dices: DICE_VALUE_TYPE[]) => void;
  used_magic_dices: null | DICE_VALUE_TYPE[];

  // HERO:
  default_hero_dice: null;
  number_of_hero_dices: number;
  hero_dices: null | DICE_VALUE_TYPE[];
  used_hero_dices: null | DICE_VALUE_TYPE[];
}

export const useDiceStoreV2 = create<useDiceStore_Type>((set) => ({
  // ATTACK:
  default_attack_dice: DEFAULT_ATTACK_DICE,
  number_of_attack_dices: 1,
  attack_dices: [DEFAULT_ATTACK_DICE],
  set_attack_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ attack_dices: newDices }),
  used_attack_dices: null,

  // DEFENSE:
  default_defense_dice: DEFAULT_DEFENSE_DICE,
  number_of_defense_dices: 1,
  defense_dices: [DEFAULT_DEFENSE_DICE],
  set_defense_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ defense_dices: newDices }),
  used_defense_dices: null,

  // MAGIC:
  default_magic_dice: DEFAULT_MAGIC_DICE,
  number_of_magic_dices: 1,
  magic_dices: [DEFAULT_MAGIC_DICE],
  set_magic_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ magic_dices: newDices }),
  used_magic_dices: null,

  // HERO:
  default_hero_dice: null,
  number_of_hero_dices: 1,
  hero_dices: null,
  used_hero_dices: null,
}));

// number_of_magic: 0,
//   inc_number_of_attack: (num: number) =>
//     set((state) => ({ number_of_attack: state.number_of_attack + num })),
