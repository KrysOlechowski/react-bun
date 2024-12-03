import { Hono } from "hono";
import { logger } from "hono/logger";
import { JS_CARDS_ROUTES } from "./routes/cards";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

const apiRoutes = app.basePath("/api").route("/js_cards", JS_CARDS_ROUTES);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
