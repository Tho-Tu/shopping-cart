import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  // const { items } = useLoaderData();
  return (
    <div className="flex flex-col font-custom">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
