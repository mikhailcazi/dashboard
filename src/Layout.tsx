import { Outlet } from "react-router";
import Header from "./components/header";

export default function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="body h-full bg-neutral-100">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
