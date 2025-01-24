// import { getLesson } from "@/api/lesson/get_lesson";
import { JAVASCRIPT_1_2_1 } from "@/const/JAVASCRIPT/TEST/JAVASCRIPT_1_2_1";
import { useLessonStore } from "@/store/lesson/lesson";
import { TopicLessonType } from "@/types/topics_types";
// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MainScreenContent } from "./MainScreenContent";
import { QuestionsScreenContent } from "./QuestionsScreenContent";

const LESSON_VIEW = {
  Main_Screen: "Main_Screen",
  Question_Screen: "Question_Screen",
  End_Screen: "End_Screen",
} as const;

type LessonViewType = (typeof LESSON_VIEW)[keyof typeof LESSON_VIEW];

type Props = {
  topic: TopicLessonType;
  onEndLessonClick: () => void;
};

export const Lesson = ({ topic, onEndLessonClick }: Props) => {
  const [currentView, setCurrentView] = useState<LessonViewType>(
    LESSON_VIEW.Main_Screen
  );
  //   const { set_current_lesson, set_questions_list } = useLessonStore();
  //   const { data: lesson } = useQuery({
  //     queryKey: [`get_lesson/js/${topic.index}`, topic.index] as const,
  //     queryFn: getLesson,
  //   });
  const lesson = JAVASCRIPT_1_2_1;
  const questions = lesson.content.questions;

  console.log(lesson);

  useEffect(() => {
    if (lesson) {
    }
  }, [lesson]);

  const onQuestionsStart = () => {
    console.log("start questions");
    setCurrentView(LESSON_VIEW.Question_Screen);
  };

  const onEndQuestionClick = () => {
    console.log("End Questions");
  };

  const onGoToMainScreenClick = () => {
    setCurrentView(LESSON_VIEW.Main_Screen);
  };

  const onEndAllQuestionsCorrect = () => {
    setCurrentView(LESSON_VIEW.End_Screen);
  };

  return lesson ? (
    <>
      {currentView === LESSON_VIEW.Main_Screen && (
        <MainScreenContent
          lesson={lesson}
          onQuestionsStart={onQuestionsStart}
          onEndLessonClick={onEndLessonClick}
        />
      )}
      {currentView === LESSON_VIEW.Question_Screen && (
        <QuestionsScreenContent
          questions={questions}
          onEndQuestionClick={onEndLessonClick}
          onGoToMainScreen={onGoToMainScreenClick}
          onEndAllQuestionsCorrect={onEndAllQuestionsCorrect}
        />
      )}
      {currentView === LESSON_VIEW.End_Screen && <div>END SCREEN!!</div>}
    </>
  ) : (
    <div className="z-50 w-full h-full bg-amber-300 fixed right-0 top-0">
      Lesson Overlay
      <h1>Lesson not found</h1>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onEndLessonClick}>END LESSON</button>
      </div>
    </div>
  );
};
