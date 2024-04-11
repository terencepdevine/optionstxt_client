import { Outlet } from "react-router-dom";
import Header from "./Header";
import Grid from "./Grid";

function AppLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <Grid className="scrollbar flex-1 overflow-y-scroll">
        <Outlet />
      </Grid>
    </div>
  );
}

export default AppLayout;
