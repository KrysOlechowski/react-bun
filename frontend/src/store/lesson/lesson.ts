import { LessonType, QuestionType } from "@/types/lesson_types";

import { create } from "zustand";

interface useLessonStoreType {
  current_lesson: LessonType | null;
  set_current_lesson: (lesson: LessonType | null) => void;
  questions: QuestionType[] | null;
  set_questions_list: (questions: QuestionType[] | null) => void;
  wrong_questions_list: QuestionType[] | null;
  set_wrong_questions_list: (questions: QuestionType[] | null) => void;
}

export const useLessonStore = create<useLessonStoreType>((set) => ({
  current_lesson: null,
  set_current_lesson: (lesson: LessonType | null) =>
    set({ current_lesson: lesson }),
  questions: null,
  set_questions_list: (questions: QuestionType[] | null) =>
    set({ questions: questions }),
  wrong_questions_list: null,
  set_wrong_questions_list: (questions: QuestionType[] | null) =>
    set({ questions: questions }),
}));
