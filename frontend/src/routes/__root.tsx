import { useUserStore } from "@/store/user";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

function NavBar() {
  const { userName } = useUserStore();

  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home Page
        </Link>{" "}
        <Link to="/admin" className="[&.active]:font-bold">
          Admin Page
        </Link>
        <Link to="/login" className="[&.active]:font-bold">
          Login Page
        </Link>
        <div>{userName ? userName : "Please Login"}</div>
      </div>
      <hr />
    </>
  );
}
