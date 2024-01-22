import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div className="font-custom">
      <Header />
      <div className="text-green-900">hello world</div>
      <Outlet />
    </div>
  );
}

export default Root;
