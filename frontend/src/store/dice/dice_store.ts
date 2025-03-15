import { USER_DICES } from "@/components/dice/dice_const";
import { DICE_TILES_ENUM, DICE_VALUE_TYPE } from "@/types/dice_types";
import { create } from "zustand";

interface useDiceStore_Type {
  is_test_mode: boolean;
  toggle_test_mode: () => void;
  number_of_rolls: number;
  increment_number_of_rolls: () => void;
  reset_number_of_rolls: () => void;

  dices: DICE_VALUE_TYPE[] | [];
  used_dices: DICE_VALUE_TYPE[] | [];

  set_dices: (dices: DICE_VALUE_TYPE[]) => void;
  set_used_dices: (dices: DICE_VALUE_TYPE[]) => void;

  reset_dices: () => void;

  number_of_attack: number;
  number_of_defense: number;
  number_of_magic: number;
  inc_number_of_attack: (num: number) => void;
  inc_number_of_defense: (num: number) => void;
  inc_number_of_magic: (num: number) => void;
  reset_stats: () => void;
}

export const useDiceStore = create<useDiceStore_Type>((set) => ({
  is_test_mode: false,
  toggle_test_mode: () =>
    set((state) => ({ is_test_mode: !state.is_test_mode })),
  number_of_rolls: 0,
  increment_number_of_rolls: () =>
    set((state) => ({ number_of_rolls: state.number_of_rolls + 1 })),
  reset_number_of_rolls: () => set({ number_of_rolls: 0 }),

  dices: USER_DICES,
  used_dices: [],

  set_dices: (newDices: DICE_VALUE_TYPE[]) => set({ dices: newDices }),
  set_used_dices: (newDices: DICE_VALUE_TYPE[]) =>
    set({ used_dices: newDices }),

  reset_dices: () => set({ dices: [] }),

  number_of_attack: 0,
  number_of_defense: 0,
  number_of_magic: 0,
  inc_number_of_attack: (num: number) =>
    set((state) => ({ number_of_attack: state.number_of_attack + num })),
  inc_number_of_defense: (num: number) =>
    set((state) => ({ number_of_defense: state.number_of_defense + num })),
  inc_number_of_magic: (num: number) =>
    set((state) => ({ number_of_magic: state.number_of_magic + num })),
  reset_stats: () =>
    set({ number_of_attack: 0, number_of_defense: 0, number_of_magic: 0 }),
}));
