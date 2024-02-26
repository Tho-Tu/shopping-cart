import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.tsx';
import Home from './components/Home';
import Store from './components/Store';
import ErrorPage from './components/ErrorPage';
// import ShoppingCart from './components/ShoppingCart';
import Item, { itemAction } from './components/Item.tsx';
import { loader as headerLoader } from './Root.tsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: headerLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/store',
          element: <Store />,
        },
        {
          path: 'store/:itemId',
          element: <Item />,
          action: itemAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
