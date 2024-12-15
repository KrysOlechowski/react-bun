import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

function NavBar() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home Page
        </Link>{" "}
        <Link to="/admin" className="[&.active]:font-bold">
          Admin Page
        </Link>
      </div>
      <hr />
    </>
  );
}
