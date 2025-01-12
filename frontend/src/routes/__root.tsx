import { NavBar } from "@/components/navbar/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
