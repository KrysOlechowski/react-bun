import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { create } from "zustand";

interface useDiceStore_Type {
  is_test_mode: boolean;
  toggle_test_mode: () => void;
  number_of_rolls: number;
  increment_number_of_rolls: () => void;
  reset_number_of_rolls: () => void;
  dices: DICE_VALUE_TYPE[];
}

export const useDiceStore = create<useDiceStore_Type>((set) => ({
  is_test_mode: false,
  toggle_test_mode: () =>
    set((state) => ({ is_test_mode: !state.is_test_mode })),
  number_of_rolls: 0,
  increment_number_of_rolls: () =>
    set((state) => ({ number_of_rolls: state.number_of_rolls + 1 })),
  reset_number_of_rolls: () => set({ number_of_rolls: 0 }),
  dices: [],
}));
