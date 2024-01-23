import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  // const { items } = useLoaderData();
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
