import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Store from "./components/Store";
import ErrorPage from "./components/ErrorPage";
import ShoppingCart from "./components/ShoppingCart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/shopping-cart",
      element: <ShoppingCart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
