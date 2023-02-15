import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Add_Category from "../../pages/Add_Category";
import Home from "../../pages/Home";
import Category from "../../pages/Category";
import SignIn from "../../pages/SignIn";
import Add_product from "../../pages/Add_product";
import Product from "../../pages/Product";
import Order from "../../pages/Order";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/add_category",
        element: <Add_Category></Add_Category>,
      },

      {
        path: "/category_list",
        element: <Category></Category>,
      },
      {
        path: "/add_product",
        element: <Add_product></Add_product>,
      },
      {
        path: "/product_list",
        element: <Product></Product>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/signup",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
