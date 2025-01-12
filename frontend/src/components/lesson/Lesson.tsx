import { useLessonStore } from "@/store/lesson/lesson";
import { LessonType } from "@/types/topics_types";

type Props = {
  lesson: LessonType;
};

export const Lesson = ({ lesson }: Props) => {
  const { set_current_lesson } = useLessonStore();
  const onLessonEnd = () => {
    set_current_lesson(null);
  };
  return (
    <div className="w-full h-full bg-amber-300 fixed right-0 top-0">
      Lesson Overlay
      <h1>{lesson.title}</h1>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onLessonEnd}>END LESSON</button>
      </div>
    </div>
  );
};
