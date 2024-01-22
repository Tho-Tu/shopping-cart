import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div className="flex flex-col gap-4 font-custom">
      <Header />
      <div className="px-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
