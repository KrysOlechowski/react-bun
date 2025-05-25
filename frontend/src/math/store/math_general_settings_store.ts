import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface MATH_GENERAL_TESSINGS_TYPE {
  difficulty_start_level: number;
  set_difficulty_start_level: (level: number) => void;

  is_level_difficulty_increment: boolean;
  set_is_level_difficulty_increment: (bool: boolean) => void;

  is_timer_disabled: boolean;
  set_is_timer_disabled: (bool: boolean) => void;

  is_auto_next_step: boolean;
  set_is_auto_next_step: (bool: boolean) => void;

  is_test_mode: boolean;
  set_test_mode: (bool: boolean) => void;

  language: string;

  persist_current_score: number;
  set_persist_current_score: (num: number) => void;
  persist_correct_answers: number;
  set_persist_correct_answers: (num: number) => void;
  persist_wrong_answers: number;
  set_persist_wrong_answers: (num: number) => void;

  persist_best_current_score: number;
  set_persist_best_current_score: (num: number) => void;
  persist_best_correct_answers: number;
  set_persist_best_correct_answers: (num: number) => void;
  persist_best_wrong_answers: number;
  set_persist_best_wrong_answers: (num: number) => void;
}

export const useMathGeneralSettings = create<MATH_GENERAL_TESSINGS_TYPE>()(
  persist(
    (set) => ({
      difficulty_start_level: 1,
      set_difficulty_start_level: (level: number) =>
        set({ difficulty_start_level: level }),

      is_level_difficulty_increment: false,
      set_is_level_difficulty_increment: (bool: boolean) =>
        set({ is_level_difficulty_increment: bool }),

      is_timer_disabled: false,
      set_is_timer_disabled: (bool: boolean) =>
        set({ is_timer_disabled: bool }),

      is_auto_next_step: false,
      set_is_auto_next_step: (bool: boolean) =>
        set({ is_auto_next_step: bool }),

      is_test_mode: false,
      set_test_mode: (bool: boolean) => set({ is_test_mode: bool }),

      language: "eng", //TODO add

      persist_current_score: 0,
      set_persist_current_score: (num: number) =>
        set({ persist_current_score: num }),
      persist_correct_answers: 0,
      set_persist_correct_answers: (num: number) =>
        set({ persist_correct_answers: num }),
      persist_wrong_answers: 0,
      set_persist_wrong_answers: (num: number) =>
        set({ persist_wrong_answers: num }),

      persist_best_current_score: 0,
      set_persist_best_current_score: (num: number) =>
        set({ persist_best_current_score: num }),
      persist_best_correct_answers: 0,
      set_persist_best_correct_answers: (num: number) =>
        set({ persist_best_correct_answers: num }),
      persist_best_wrong_answers: 0,
      set_persist_best_wrong_answers: (num: number) =>
        set({ persist_best_wrong_answers: num }),
    }),
    {
      name: "math-game-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
