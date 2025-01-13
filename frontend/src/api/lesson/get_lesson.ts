import { API_CLIENT } from "@/lib/api";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getLesson({
  queryKey,
}: QueryFunctionContext<[string, string | null | undefined]>) {
  const [_, lesson_index] = queryKey;
  const res = await API_CLIENT.lessons["get_lesson"][":id"].$get({
    param: {
      id: lesson_index ? lesson_index : "666.666.666.",
    },
  });
  if (!res.ok) {
    throw new Error("Server Error");
  }
  const data = await res.json();
  return data;
}
