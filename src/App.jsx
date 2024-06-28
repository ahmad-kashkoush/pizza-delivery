import Cart from "@/features/cart/Cart";
import Menu, { loader as menuLoader } from "@/features/menu/Menu";
import { CreateOrder, Order } from "@/features/order";
import { AppLayout, Error, Home } from "@/ui";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, 
        loader: menuLoader,
        errorElement:<Error />,

       },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
