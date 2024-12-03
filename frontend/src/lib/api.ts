import { type ApiRoutes } from "@server/app";

import { hc } from "hono/client";

const client = hc<ApiRoutes>("/");

export const API_CLIENT = client.api;
