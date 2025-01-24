import { QuestionType } from "@/types/lesson_types";
import { useState } from "react";
import { SingleQuestionContent } from "./SingleQuestionContent";

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
  console.log({ questions });

  const numberOfLessons = questions.length;
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const isAllQuestionsDone =
    numberOfCorrectAnswers >= numberOfLessons ? true : false;
  if (isAllQuestionsDone) {
    onEndAllQuestionsCorrect();
  }
  const currentQuestion = isAllQuestionsDone ? null : questions[questionIndex];

  const onNextQuestionClick = (isCorrect: boolean, questionIndex: string) => {
    console.log(isCorrect);
    console.log(questionIndex);
  };
  if (currentQuestion) {
    return (
      <div className="z-40 w-full h-full bg-amber-300 fixed right-0 top-0 p-2.5 ">
        <div className="p-10 border-solid border-4 border-green-200">
          <SingleQuestionContent question={currentQuestion} />
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
