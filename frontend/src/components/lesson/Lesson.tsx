import { getLesson } from "@/api/lesson/get_lesson";
import { useLessonStore } from "@/store/lesson/lesson";
import { LessonType } from "@/types/topics_types";
import { useQuery } from "@tanstack/react-query";

type Props = {
  lesson: LessonType;
};

export const Lesson = ({ lesson }: Props) => {
  const { set_current_lesson } = useLessonStore();
  const { data }: any = useQuery({
    queryKey: [`get_lesson/js/${lesson.index}`, lesson.index] as const,
    queryFn: getLesson,
  });

  console.log(data);

  const onLessonEnd = () => {
    set_current_lesson(null);
  };

  return data ? (
    <div className="w-full h-full bg-amber-300 fixed right-0 top-0">
      Lesson Overlay
      <h1>{data?.content?.main_title}</h1>
      <h1>{data?.lesson_index}</h1>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onLessonEnd}>END LESSON</button>
      </div>
    </div>
  ) : (
    <div className="w-full h-full bg-amber-300 fixed right-0 top-0">
      Lesson Overlay
      <h1>Lesson not found</h1>
      <div className="fixed bottom-0 right-0 p-2.5">
        <button onClick={onLessonEnd}>END LESSON</button>
      </div>
    </div>
  );
};
