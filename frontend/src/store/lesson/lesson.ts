import { create } from "zustand";

interface useLessonStoreType {
  is_lesson_started: boolean;
  set_is_lesson_started: (bool: boolean) => void;
  current_lesson_index: string;
  set_current_lesson_index: (index: string) => void;
}

export const useLessonStore = create<useLessonStoreType>((set) => ({
  is_lesson_started: false,
  set_is_lesson_started: (bool: boolean) => set({ is_lesson_started: bool }),
  current_lesson_index: "",
  set_current_lesson_index: (index: string) =>
    set({ current_lesson_index: index }),
}));
