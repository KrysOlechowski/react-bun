import { SquareTerminal } from "lucide-react";

export const JAVASCRIPT_TOPICS = {
  tech_topic: "JavaScript",
  topics: [
    {
      index: "1.",
      topic_title: "1. Types, Values, and Variables",
      is_default_open: false,
      number_of_sub_topics: 5,
      difficulty_level: 1,
      sub_topics: [
        {
          index: "1.1.",
          title: "1.1. Numbers",
          url: "#",
          icon: SquareTerminal,
          is_default_open: false,
          is_lessons_started: false,
          lessons: [
            {
              index: "1.1.1.",
              title: "1.1.1. Integer Literals",
              url: "*",
              is_lesson_started: false,
              is_lesson_correct: false,
              icon: SquareTerminal,
            },
          ],
        },
      ],
    },
  ],
};
