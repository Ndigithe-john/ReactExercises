import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@components/Home";
import Menu from "@features/menu/Menu";
import Cart from "@features/cart/Cart";
import CreateOrder from "@features/order/CreateOrder";
import Order from "@features/order/Order";
import NotFound from "@components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "order/:orderId",
    element: <Order />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
