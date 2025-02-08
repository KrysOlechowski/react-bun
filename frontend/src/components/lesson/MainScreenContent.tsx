import { LESSON_VIEW, useLessonStore } from "@/store/lesson/lesson";
import { LessonType } from "@/types/lesson_types";

type Props = {
  lesson: LessonType;
  onEndLessonClick: () => void;
};

export const MainScreenContent = ({ lesson, onEndLessonClick }: Props) => {
  const mainContent = lesson.content.main_screen_html;
  const { set_current_lesson_view } = useLessonStore();
  const onQuestionsStartClick = () => {
    set_current_lesson_view(LESSON_VIEW.Question_Screen);
  };

  return (
    <div className="z-40 w-full h-full bg-amber-300 fixed right-0 top-0 p-2.5">
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
        <button onClick={onQuestionsStartClick}>
          Start questions:{lesson.content.questions.length}
        </button>
      </div>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onEndLessonClick}>END LESSON</button>
      </div>
    </div>
  );
};
