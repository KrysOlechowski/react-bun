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
}

export const useMathGameSettings = create<MATH_GAME_SETTINGS_TYPE>((set) => ({
  game_view: MATH_VIEW.idle,
  set_game_view: (view: MATH_VIEW_TYPE) => set({ game_view: view }),
}));
