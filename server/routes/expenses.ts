import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Question = {
  id: number;
  title: string;
  amount: number;
};

export const fake_question: Question[] = [
  {
    id: 111,
    title: "tiiiitle",
    amount: 666,
  },
  {
    id: 222,
    title: "tiiiitle",
    amount: 666,
  },
  {
    id: 333,
    title: "tiiiitle",
    amount: 666,
  },
];

const cardSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  amount: z.number(),
});

const cardPostSchema = cardSchema.omit({ id: true });

type TestSchema = z.infer<typeof cardSchema>;

export const ROUTES = new Hono()
  .get("/", async (c) => {
    return c.json({ expenses: fake_question });
  })
  .get("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const question = fake_question.find((q) => q.id === id);
    console.log(question);
    if (!question) {
      console.log("IF");
      return c.notFound();
    }
    return c.json({ question });
  })
  .post("/", zValidator("json", cardPostSchema), async (c) => {
    const card = c.req.valid("json");
    fake_question.push({ ...card, id: 145 });
    c.status(201);
    return c.json(card);
  })
  .delete("/:id{[0-9]+}", async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = fake_question.findIndex((i) => i.id === id);
    if (index === -1) {
      return c.notFound();
    }
    const deletedQuestion = fake_question.splice(index, 1)[0];
    return c.json({ question: deletedQuestion });
  });
