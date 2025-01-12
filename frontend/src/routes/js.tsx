import { Lesson } from "@/components/lesson/Lesson";
import { JAVASCRIPT_TOPICS } from "@/const/JAVASCRIPT/JAVASCRIPT_TOPICS";
import { TopicsLayout } from "@/layout/topics_layout/topics_layout";
import { useLessonStore } from "@/store/lesson/lesson";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/js")({
  component: RouteComponent,
});

function RouteComponent() {
  const { is_lesson_started } = useLessonStore();
  return (
    <div>
      <h1 className="text-center p-3">Start Learning</h1>
      <TopicsLayout lessons={JAVASCRIPT_TOPICS} />
      {is_lesson_started && <Lesson />}
    </div>
  );
}
