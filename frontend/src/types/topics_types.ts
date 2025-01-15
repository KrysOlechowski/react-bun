import { JAVASCRIPT_TOPICS } from "@/const/JAVASCRIPT/JAVASCRIPT_TOPICS";

export type TopicsType = typeof JAVASCRIPT_TOPICS;

export type TopicLessonType =
  (typeof JAVASCRIPT_TOPICS)["topics"][0]["sub_topics"][0]["lessons"][0];
