import Cart from '@/features/cart/Cart';
import Menu, { loader as menuLoader } from '@/features/menu/Menu';
import { CreateOrder, Order } from '@/features/order';

import { action as createOrderAction, loader as createOrderLoader } from '@/features/order/CreateOrder';
import { loader as orderLoader } from '@/features/order/Order';
import { AppLayout, Error, Home } from '@/ui';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        loader: createOrderLoader,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
