import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white dark:bg-neutral-900">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
