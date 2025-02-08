import { LessonType, QuestionType } from "@/types/lesson_types";

import { create } from "zustand";

export const LESSON_VIEW = {
  Main_Screen: "Main_Screen",
  Question_Screen: "Question_Screen",
  End_Screen: "End_Screen",
} as const;

export type LessonViewType = keyof typeof LESSON_VIEW;
interface useLessonStoreType {
  current_lesson_view: LessonViewType;
  set_current_lesson_view: (view: LessonViewType) => void;
  current_lesson: LessonType | null;
  set_current_lesson: (lesson: LessonType | null) => void;

  questions: QuestionType[] | null;
  set_questions_list: (questions: QuestionType[] | null) => void;
  current_question: QuestionType | null;
  set_current_question: (question: QuestionType) => void;

  wrong_questions_list: QuestionType[] | null;
  set_wrong_questions_list: (questions: QuestionType[] | null) => void;
  number_of_correct_questions: number;
  set_number_of_correct_questions: (num: number) => void;
  is_all_questions_done: boolean;
  set_is_all_questions_done: (bool: boolean) => void;
  number_of_questions: number;
  set_number_of_questions: (num: number) => void;
}

export const useLessonStore = create<useLessonStoreType>((set) => ({
  current_lesson_view: LESSON_VIEW.Main_Screen,
  set_current_lesson_view: (view: LessonViewType) =>
    set({ current_lesson_view: view }),
  current_lesson: null,
  set_current_lesson: (lesson: LessonType | null) =>
    set({ current_lesson: lesson }),
  questions: null,
  set_questions_list: (questions: QuestionType[] | null) =>
    set({ questions: questions }),
  current_question: null,
  set_current_question: (question: QuestionType) =>
    set({ current_question: question }),

  wrong_questions_list: null,
  set_wrong_questions_list: (questions: QuestionType[] | null) =>
    set({ wrong_questions_list: questions }),
  number_of_correct_questions: 0,
  set_number_of_correct_questions: (num: number) =>
    set({ number_of_correct_questions: num }),
  is_all_questions_done: false,
  set_is_all_questions_done: (bool: boolean) =>
    set({ is_all_questions_done: bool }),
  number_of_questions: 0,
  set_number_of_questions: (num: number) => set({ number_of_questions: num }),
}));
