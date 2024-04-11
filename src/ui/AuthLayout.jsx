import { Outlet } from "react-router-dom";

import Header from "./Header";

function AuthLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <div className="flex h-full flex-row">
        <div className="w-1/3 p-8">
          <Outlet />
        </div>
        <div className="w-2/3 bg-blue-600"></div>
      </div>
    </div>
  );
}

export default AuthLayout;
