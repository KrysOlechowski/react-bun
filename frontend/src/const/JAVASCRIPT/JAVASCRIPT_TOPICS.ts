import { SquareTerminal } from "lucide-react";

const API_USER_FAKE_DATA = {
  id: "213123",
  user_name: "John",
  created_at: "8.12.2024",
  app_settings: {
    theme: "default",
  },
  javascript_lessons: {
    number_of_correct_answers: 15,
    lessons: [
      {
        index: "1.",
      },
      {},
    ],
  },
  react_lessons: {
    number_of_correct_answers: 16,
    lessons: [],
  },
};

export const JAVASCRIPT_TOPICS = {
  tech_topic: "JavaScript",
  topics: [
    {
      index: "1.",
      topic_title: "1. Types, Values, and Variables",
      is_default_open: false,
      is_open: false,
      number_of_sub_topics: 5,
      difficulty_level: 1,
      sub_topics: [
        {
          index: "1.1.",
          title: "1.1. Numbers",
          url: "#",
          difficulty_level: 1,
          icon: SquareTerminal,
          is_default_open: false,
          is_open: false,
          is_lessons_started: false,
          lessons: [
            {
              index: "1.1.1.",
              title: "1.1.1. Integer Literals",
              url: "*",
              is_lesson_correct: false,
              is_lesson_started: false,
              icon: SquareTerminal,
              difficulty_level: 1,
            },
            {
              index: "1.1.2.",
              title: "1.1.1. Floating-Point Literals",
              url: "*",
              is_lesson_correct: false,
              is_lesson_started: false,
              icon: SquareTerminal,
              difficulty_level: 1,
            },
          ],
        },
        {
          index: "1.2.",
          title: "1.2. Boolean values",
          url: "#",
          difficulty_level: 1,
          icon: SquareTerminal,
          is_default_open: false,
          is_open: false,
          is_lessons_started: false,
          lessons: [
            {
              index: "1.2.1.",
              title: "1.2.1. What's Boolean",
              url: "*",
              is_lesson_correct: false,
              is_lesson_started: false,
              icon: SquareTerminal,
              difficulty_level: 1,
            },
            {
              index: "1.2.2.",
              title: "1.2.2. Boolean coercion",
              url: "*",
              is_lesson_correct: false,
              is_lesson_started: false,
              icon: SquareTerminal,
              difficulty_level: 1,
            },
          ],
        },
      ],
    },
  ],
};
