import {
  DEFAULT_ATTACK_DICE,
  DEFAULT_DEFENSE_DICE,
  DEFAULT_MAGIC_DICE,
} from "@/components/dice/dice_const";
import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useDiceStore_Type {
  // ATTACK:
  default_attack_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_attack_dices: number;

  attack_dices: DICE_VALUE_TYPE[];
  set_attack_dices: (dices: DICE_VALUE_TYPE[]) => void;

  used_attack_dices: null | DICE_VALUE_TYPE[];
  set_used_attack_dices: (dices: DICE_VALUE_TYPE[]) => void;

  // DEFENSE:
  default_defense_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_defense_dices: number;

  defense_dices: DICE_VALUE_TYPE[];
  set_defense_dices: (dices: DICE_VALUE_TYPE[]) => void;

  used_defense_dices: null | DICE_VALUE_TYPE[];
  set_used_defense_dices: (dices: DICE_VALUE_TYPE[]) => void;

  // MAGIC:
  default_magic_dice: typeof DEFAULT_ATTACK_DICE;
  number_of_magic_dices: number;

  magic_dices: DICE_VALUE_TYPE[];
  set_magic_dices: (dices: DICE_VALUE_TYPE[]) => void;

  used_magic_dices: null | DICE_VALUE_TYPE[];
  set_used_magic_dices: (dices: DICE_VALUE_TYPE[]) => void;

  // HERO:
  default_hero_dice: null;
  number_of_hero_dices: number;
  hero_dices: null | DICE_VALUE_TYPE[];
  used_hero_dices: null | DICE_VALUE_TYPE[];

  // GENERAL:
  is_reset_used_dices: boolean;
  set_reset_all_used_dices: (bool: boolean) => void;
}

export const useDiceStoreV2xxx = create<useDiceStore_Type>((set) => ({
  // ATTACK:
  default_attack_dice: DEFAULT_ATTACK_DICE,
  number_of_attack_dices: 1,
  attack_dices: [DEFAULT_ATTACK_DICE],
  set_attack_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ attack_dices: newDices }),

  used_attack_dices: null,
  set_used_attack_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ used_attack_dices: newDices }),

  // DEFENSE:
  default_defense_dice: DEFAULT_DEFENSE_DICE,
  number_of_defense_dices: 1,

  defense_dices: [DEFAULT_DEFENSE_DICE],
  set_defense_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ defense_dices: newDices }),

  used_defense_dices: null,
  set_used_defense_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ used_defense_dices: newDices }),

  // MAGIC:
  default_magic_dice: DEFAULT_MAGIC_DICE,
  number_of_magic_dices: 1,

  magic_dices: [DEFAULT_MAGIC_DICE],
  set_magic_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ magic_dices: newDices }),

  used_magic_dices: null,
  set_used_magic_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ used_magic_dices: newDices }),
  // HERO:
  default_hero_dice: null,
  number_of_hero_dices: 1,
  hero_dices: null,
  used_hero_dices: null,
  // GENERAL:
  is_reset_used_dices: false,
  set_reset_all_used_dices: (bool: boolean) =>
    set({
      used_attack_dices: null,
      used_defense_dices: null,
      used_magic_dices: null,
      is_reset_used_dices: bool,
    }),
}));

export const useDiceStoreV2 = create<useDiceStore_Type>()(
  persist(
    (set) => ({
      // ATTACK:
      default_attack_dice: DEFAULT_ATTACK_DICE,
      number_of_attack_dices: 1,
      attack_dices: [DEFAULT_ATTACK_DICE],
      set_attack_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ attack_dices: newDices }),

      used_attack_dices: null,
      set_used_attack_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ used_attack_dices: newDices }),

      // DEFENSE:
      default_defense_dice: DEFAULT_DEFENSE_DICE,
      number_of_defense_dices: 1,

      defense_dices: [DEFAULT_DEFENSE_DICE],
      set_defense_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ defense_dices: newDices }),

      used_defense_dices: null,
      set_used_defense_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ used_defense_dices: newDices }),

      // MAGIC:
      default_magic_dice: DEFAULT_MAGIC_DICE,
      number_of_magic_dices: 1,

      magic_dices: [DEFAULT_MAGIC_DICE],
      set_magic_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ magic_dices: newDices }),

      used_magic_dices: null,
      set_used_magic_dices: (newDices: DICE_VALUE_TYPE[]) =>
        set({ used_magic_dices: newDices }),
      // HERO:
      default_hero_dice: null,
      number_of_hero_dices: 1,
      hero_dices: null,
      used_hero_dices: null,
      // GENERAL:
      is_reset_used_dices: false,
      set_reset_all_used_dices: (bool: boolean) =>
        set({
          used_attack_dices: null,
          used_defense_dices: null,
          used_magic_dices: null,
          is_reset_used_dices: bool,
        }),
    }),
    {
      name: "dice-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
