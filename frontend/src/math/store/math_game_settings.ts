export const MATH_VIEW = {
  idle: "idle",
  game: "game",
  end: "end",
} as const;

export type MATH_VIEW_TYPE = keyof typeof MATH_VIEW;

import { create } from "zustand";

interface MATH_GAME_SETTINGS_TYPE {
  game_view: MATH_VIEW_TYPE;
  set_game_view: (view: MATH_VIEW_TYPE) => void;

  difficulty_current_level: number;
  set_difficulty_current_level: (num: number) => void;

  number_of_correct_answers: number;
  increase_number_of_correct_answers: () => void;

  number_of_wrong_answers: number;
  increase_number_of_wrong_answers: () => void;
}

export const useMathGameSettings = create<MATH_GAME_SETTINGS_TYPE>((set) => ({
  game_view: MATH_VIEW.idle,
  set_game_view: (view: MATH_VIEW_TYPE) => set({ game_view: view }),

  difficulty_current_level: 1,
  set_difficulty_current_level: (num: number) =>
    set({ difficulty_current_level: num }),

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
}));
