import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  // const { items } = useLoaderData();
  return (
    <div className="flex flex-col justify-between font-custom min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
