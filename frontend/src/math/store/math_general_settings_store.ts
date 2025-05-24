import { create } from "zustand";

interface MATH_GENERAL_TESSINGS_TYPE {
  number_of_correct_answers: number;
  increase_number_of_correct_answers: () => void;

  number_of_wrong_answers: number;
  increase_number_of_wrong_answers: () => void;

  difficulty_level: number;
  set_difficulty_level: (level: number) => void;

  is_level_difficulty_increment: boolean;
  set_is_level_difficulty_increment: (bool: boolean) => void;

  is_timer_disabled: boolean;
  set_is_timer_disabled: (bool: boolean) => void;

  is_auto_next_step: boolean;
  set_is_auto_next_step: (bool: boolean) => void;
}

export const useMathGeneralSettings = create<MATH_GENERAL_TESSINGS_TYPE>(
  (set) => ({
    number_of_correct_answers: 0,
    increase_number_of_correct_answers: () =>
      set((state) => ({
        number_of_correct_answers: state.number_of_correct_answers + 1,
      })),

    number_of_wrong_answers: 0,
    increase_number_of_wrong_answers: () =>
      set((state) => ({
        number_of_wrong_answers: state.number_of_wrong_answers + 1,
      })),

    difficulty_level: 1,
    set_difficulty_level: (level: number) => set({ difficulty_level: level }),

    is_level_difficulty_increment: false,
    set_is_level_difficulty_increment: (bool: boolean) =>
      set({ is_level_difficulty_increment: bool }),

    is_timer_disabled: false,
    set_is_timer_disabled: (bool: boolean) => set({ is_timer_disabled: bool }),

    is_auto_next_step: false,
    set_is_auto_next_step: (bool: boolean) => set({ is_auto_next_step: bool }),
  })
);
