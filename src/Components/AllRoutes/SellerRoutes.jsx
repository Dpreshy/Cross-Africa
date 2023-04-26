import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Products from "../Products/Products";
import Private from "../Private"
import LiveProduct from "../Products/LiveProduct";
import SoldProduct from "../Products/SoldProduct";
import RejectedProduct from "../Products/RejectedProduct";
import AllOrders from "../OrderPages/AllOrders"

const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            children: [
              {
                index: true,
                element: <Private><Dashboard /></Private>,
              },
              {
                path: "all-product",
                element: <Private><Products /></Private>,
              },
              {
                path: "live-product",
                element: <Private><LiveProduct /></Private>,
              },
              {
                path: "sold-product",
                element: <Private><SoldProduct /></Private>,
              },
              {
                path: "rejected-product",
                element: <Private><RejectedProduct /></Private>,
              },
              {
                path: "all-orders",
                element: <Private><AllOrders /></Private>,
              },
            ]
        },
  ]);

  return element;
};

export default AllRoutes;
