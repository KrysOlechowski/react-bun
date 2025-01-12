import { LessonType } from "@/types/topics_types";
import { create } from "zustand";

interface useLessonStoreType {
  current_lesson: LessonType | null;
  set_current_lesson: (lesson: LessonType | null) => void;
}

export const useLessonStore = create<useLessonStoreType>((set) => ({
  current_lesson: null,
  set_current_lesson: (lesson: LessonType | null) =>
    set({ current_lesson: lesson }),
}));
