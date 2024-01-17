import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Store from "./components/Store";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/components/home",
      element: <Home />,
    },
    {
      path: "/components/store",
      element: <Store />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
