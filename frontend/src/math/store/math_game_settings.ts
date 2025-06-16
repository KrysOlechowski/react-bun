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

  is_game_end: boolean;
  set_is_game_end: (bool: boolean) => void;

  difficulty_current_level: number;
  set_difficulty_current_level: (num: number) => void;

  current_step: number;
  increase_current_step: () => void;
  reset_current_steps: () => void;

  healthbar_value: number;
  set_healthbar_value: (num: number) => void;

  current_points: number;
  set_current_points: (num: number) => void;

  number_of_correct_answers: number;
  set_number_of_correct_answers: (num: number) => void;
  increase_number_of_correct_answers: () => void;

  number_of_wrong_answers: number;
  set_number_of_wrong_answers: (num: number) => void;
  increase_number_of_wrong_answers: () => void;
}

export const useMathGameSettings = create<MATH_GAME_SETTINGS_TYPE>((set) => ({
  game_view: MATH_VIEW.idle,
  set_game_view: (view: MATH_VIEW_TYPE) => set({ game_view: view }),

  is_game_end: false,
  set_is_game_end: (bool: boolean) => set({ is_game_end: bool }),

  difficulty_current_level: 1,
  set_difficulty_current_level: (num: number) =>
    set({ difficulty_current_level: num }),

  current_step: 1,
  increase_current_step: () =>
    set((state) => ({
      current_step: state.current_step + 1,
    })),
  reset_current_steps: () => set({ current_step: 1 }),

  healthbar_value: 30,
  set_healthbar_value: (num: number) => set({ healthbar_value: num }),

  current_points: 0,
  set_current_points: (num: number) => set({ current_points: num }),

  number_of_correct_answers: 0,
  set_number_of_correct_answers: (num: number) =>
    set({ number_of_correct_answers: num }),
  increase_number_of_correct_answers: () =>
    set((state) => ({
      number_of_correct_answers: state.number_of_correct_answers + 1,
    })),

  number_of_wrong_answers: 0,
  set_number_of_wrong_answers: (num: number) =>
    set({ number_of_wrong_answers: num }),
  increase_number_of_wrong_answers: () =>
    set((state) => ({
      number_of_wrong_answers: state.number_of_wrong_answers + 1,
    })),
}));
