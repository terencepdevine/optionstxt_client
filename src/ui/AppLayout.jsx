import { Outlet } from "react-router-dom";
import Header from "./Header";
import Grid from "./Grid";

function AppLayout() {
  return (
    <div className="flex flex-col h-dvh overflow-hidden">
      <Header />
      <Grid className="overflow-y-scroll scrollbar flex-1">
        <Outlet />
      </Grid>
    </div>
  );
}

export default AppLayout;
