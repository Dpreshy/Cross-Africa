import React from "react";
import { useRoutes } from "react-router-dom";
import Private from "../Private";
 import Adpage from "../Admin/Adpage"
 import Adsignup from "../Admin/Adsignup"
 import Adlogin from "../Admin/Adlogin"
 import Settings from "../Admin/Settings"
import OrderDetail from "../Admin/OrderDetail"
import CustomersDetail from "../Admin/CustomersDetail"
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";


const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <AdminDashboard />
        },
        {
            path: "user",
            element: <Adsignup />,
          },
        {
            path: "order-detail",
            element: <OrderDetail />,
          },
        {
            path: "customer-detail",
            element: <CustomersDetail />,
          },
        {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "login",
            element: <Adlogin />,
          },
      ],
    },
  ]);

  return element;
};

export default AllRoutes;
