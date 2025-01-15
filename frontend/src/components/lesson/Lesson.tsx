// import { getLesson } from "@/api/lesson/get_lesson";
import { JAVASCRIPT_1_2_1 } from "@/const/JAVASCRIPT/TEST/JAVASCRIPT_1_2_1";
import { useLessonStore } from "@/store/lesson/lesson";
import { TopicLessonType } from "@/types/topics_types";
// import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
  topic: TopicLessonType;
  onEndLessonClick: () => void;
};

export const Lesson = ({ topic, onEndLessonClick }: Props) => {
  const { set_current_lesson, set_questions_list } = useLessonStore();
  //   const { data: lesson } = useQuery({
  //     queryKey: [`get_lesson/js/${topic.index}`, topic.index] as const,
  //     queryFn: getLesson,
  //   });
  const lesson = JAVASCRIPT_1_2_1;

  console.log(lesson);

  useEffect(() => {
    if (lesson) {
    }
  }, [lesson]);

  const onQuestionsStart = () => {
    console.log("start questions");
  };

  const mainContent = lesson.content.main_screen_html;
  return lesson ? (
    <div className="z-50 w-full h-full bg-amber-300 fixed right-0 top-0 p-2.5">
      Lesson Overlay
      <h1>{lesson.main_title}</h1>
      <h1>{lesson?.lesson_index}</h1>
      {
        <div
          dangerouslySetInnerHTML={{
            __html: mainContent,
          }}
        />
      }
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        dolorem ex vitae odit iste quia ipsam, obcaecati quos ab totam similique
        eveniet cumque quasi, sint unde ducimus. Natus, provident dicta?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        dolorem ex vitae odit iste quia ipsam, obcaecati quos ab totam similique
        eveniet cumque quasi, sint unde ducimus. Natus, provident dicta?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        dolorem ex vitae odit iste quia ipsam, obcaecati quos ab totam similique
        eveniet cumque quasi, sint unde ducimus. Natus, provident dicta?
      </p>
      <div className="fixed bottom-0 left-0 p-2.5">
        <button onClick={onQuestionsStart}>
          Start questions:{lesson.content.questions.length}
        </button>
      </div>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onEndLessonClick}>END LESSON</button>
      </div>
    </div>
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
