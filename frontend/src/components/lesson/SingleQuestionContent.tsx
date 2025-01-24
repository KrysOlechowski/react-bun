import { explanationHTMLStyle } from "@/styles/question_content_styles";
import { QuestionType } from "@/types/lesson_types";

type Props = {
  question: QuestionType;
};

export const SingleQuestionContent = ({ question }: Props) => {
  console.log(question);

  const onAnswerClick = (answer: string) => {
    console.log(answer);
    if (answer === question.correct_answer) {
      console.log("correct");
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
              onClick={() => onAnswerClick(answer)}
              className="p-4 border-4 border-solid border-green-700"
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};
