import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"></div>
        </nav>
      </div>
      <div className="body">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
