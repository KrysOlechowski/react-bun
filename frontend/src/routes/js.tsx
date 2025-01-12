import { Lesson } from "@/components/lesson/Lesson";
import { JAVASCRIPT_TOPICS } from "@/const/JAVASCRIPT/JAVASCRIPT_TOPICS";
import { TopicsLayout } from "@/layout/topics_layout/topics_layout";
import { useLessonStore } from "@/store/lesson/lesson";
import { LessonType } from "@/types/topics_types";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/js")({
  component: RouteComponent,
});

function RouteComponent() {
  const { current_lesson, set_current_lesson } = useLessonStore();
  const onLessonClick = (lesson: LessonType) => {
    set_current_lesson(lesson);
  };
  return (
    <div>
      <h1 className="text-center p-3">Start Learning</h1>
      <TopicsLayout lessons={JAVASCRIPT_TOPICS} onLessonClick={onLessonClick} />
      {current_lesson && <Lesson lesson={current_lesson} />}
    </div>
  );
}
