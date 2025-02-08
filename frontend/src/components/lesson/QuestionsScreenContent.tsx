import { QuestionType } from "@/types/lesson_types";
import { useEffect, useState } from "react";
import { SingleQuestionContent } from "./SingleQuestionContent";
import { LESSON_VIEW, useLessonStore } from "@/store/lesson/lesson";

type Props = {
  questions: QuestionType[];
  onEndQuestionClick: () => void;
  onGoToNextQuestion?: (isCorrect: boolean, questionIndex: string) => void;
  onGoToMainScreen?: () => void;
  onEndAllQuestionsCorrect: () => void;
};

export const QuestionsScreenContent = ({
  questions,
  onEndQuestionClick,
  onGoToMainScreen,
  onEndAllQuestionsCorrect,
}: Props) => {
  //TODO: 'questions' pobierać z useLessonStore
  //   console.log({ questions });

  const [current_question_index, set_current_question_index] = useState(0);

  const {
    number_of_correct_questions,
    number_of_questions,
    set_number_of_questions,
    wrong_questions_list,
    set_current_lesson_view,
    current_question,
    set_current_question,
    set_questions_list,
  } = useLessonStore();

  useEffect(() => {
    if (!current_question) {
      set_current_question(questions[0]);
      set_number_of_questions(questions.length);
    }
  }, [current_question]);

  const onNextQuestionClick = (isCorrect: boolean, questionIndex: string) => {
    console.log(isCorrect);
    console.log(questionIndex);
  };

  const goToNextStep = (is_correct: boolean) => {
    if (
      number_of_correct_questions === number_of_questions &&
      wrong_questions_list?.length === 0
    ) {
      set_current_lesson_view(LESSON_VIEW.End_Screen);
    }
  };

  if (current_question) {
    return (
      <div className="z-40 w-full h-full bg-amber-300 fixed right-0 top-0 p-2.5 ">
        <div className="p-10 border-solid border-4 border-green-200">
          <SingleQuestionContent
            question={current_question}
            goToNextStep={goToNextStep}
          />
        </div>
        <div className="fixed bottom-0 left-0">
          <button
            className="bottom-0 left-0 p-2.5 border-solid border-4 border-gray-600"
            onClick={onGoToMainScreen}
          >
            Back To Main Screen
          </button>
          <button
            className="bottom-0 left-35 p-2.5 border-solid border-4 border-gray-600"
            onClick={onEndQuestionClick}
          >
            Close Lesson [todo]
          </button>
          <button
            className="bottom-0 left-80 p-2.5 border-solid border-4 border-gray-600"
            onClick={onGoToMainScreen}
          >
            Start Again
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
