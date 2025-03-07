import { DICE_VALUE_TYPE } from "@/types/dice_types";
import { create } from "zustand";

interface useDiceStore_Type {
  number_of_rolls: number;
  increment_number_of_rolls: () => void;
  reset_number_of_rolls: () => void;
  dices: DICE_VALUE_TYPE[];
}

export const useDiceStore = create<useDiceStore_Type>((set) => ({
  number_of_rolls: 0,
  increment_number_of_rolls: () =>
    set((state) => ({ number_of_rolls: state.number_of_rolls + 1 })),
  reset_number_of_rolls: () => set({ number_of_rolls: 0 }),
  dices: [],
}));
