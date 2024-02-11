import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import Home from "./components/Home";
import Store from "./components/Store";
import ErrorPage from "./components/ErrorPage";
import ShoppingCart from "./components/ShoppingCart";
import Item from "./components/Item.tsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "store/:itemIndex",
          element: <Item />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
