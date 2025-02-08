import { LESSON_VIEW, useLessonStore } from "@/store/lesson/lesson";
import { explanationHTMLStyle } from "@/styles/question_content_styles";
import { QuestionType } from "@/types/lesson_types";

type Props = {
  question: QuestionType;
  goToNextStep: (is_correct: boolean) => void;
};

export const SingleQuestionContent = ({ question, goToNextStep }: Props) => {
  const {
    wrong_questions_list,
    set_wrong_questions_list,
    set_number_of_correct_questions,
    number_of_correct_questions,
    number_of_questions,
    set_current_lesson_view,
    set_current_question,
  } = useLessonStore();
  //   console.log({ question });
  //   console.log({ wrong_questions_list });

  const onAnswerClick = (answer: string) => {
    if (answer === question.correct_answer) {
      if (number_of_correct_questions >= number_of_questions) {
        if (wrong_questions_list && wrong_questions_list?.length >= 1) {
          set_current_question(wrong_questions_list[0]);
        } else {
          set_current_lesson_view(LESSON_VIEW.End_Screen);
        }
      }
      set_number_of_correct_questions(number_of_correct_questions + 1);
    } else {
      const newWrongArray = wrong_questions_list
        ? [...wrong_questions_list, question]
        : [question];
      set_wrong_questions_list(newWrongArray);
    }
  };

  return (
    <div>
      <h1>{question.main_title}</h1>
      <h3>Explanation:</h3>
      {
        <div
          dangerouslySetInnerHTML={{
            __html: question.explanation_content_html,
          }}
          style={explanationHTMLStyle}
        />
      }
      <h3>Answers:</h3>
      <div className="flex">
        {question.possible_answers.map((answer) => {
          return (
            <button
              key={answer}
              onClick={() => onAnswerClick(answer)}
              className="p-4 border-4 border-solid border-green-700"
            >
              {answer}
              {answer === question.correct_answer ? "+" : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};
