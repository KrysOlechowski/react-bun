import { Hono } from "hono";
import supabase from "../utils/supabase";

export const LESSONS_ROUTE = new Hono().get("/get_lesson/:id", async (c) => {
  const lesson_index = c.req.param("id");
  let { data, error, status } = await supabase
    .from("JS_LESSONS")
    .select()
    .eq("lesson_index", lesson_index)
    .throwOnError();

  if (data?.length) {
    return c.json(data[0]);
  } else {
    return c.json(null);
  }
});
