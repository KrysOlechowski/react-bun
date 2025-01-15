import { Lesson } from "@/components/lesson/Lesson";
import { JAVASCRIPT_TOPICS } from "@/const/JAVASCRIPT/JAVASCRIPT_TOPICS";
import { TopicsLayout } from "@/layout/topics_layout/topics_layout";
import { TopicLessonType } from "@/types/topics_types";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/js")({
  component: RouteComponent,
});

function RouteComponent() {
  const [topic, set_topic] = useState<TopicLessonType | null>(null);
  const onTopicClick = (topic: TopicLessonType) => {
    set_topic(topic);
  };
  const onEndLessonClick = () => {
    set_topic(null);
  };
  return (
    <div>
      <h1 className="text-center p-3">Start Learning</h1>
      <TopicsLayout topics={JAVASCRIPT_TOPICS} onTopicClick={onTopicClick} />
      {topic && <Lesson topic={topic} onEndLessonClick={onEndLessonClick} />}
    </div>
  );
}
