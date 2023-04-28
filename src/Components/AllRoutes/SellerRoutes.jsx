import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Products from "../Products/Products";
import Private from "../Private"
import LiveProduct from "../Products/LiveProduct";
import SoldProduct from "../Products/SoldProduct";
import RejectedProduct from "../Products/RejectedProduct";
import AllOrders from "../OrderPages/AllOrders"
import PendingOrders from "../OrderPages/PendingOrders";
import ReadyToShip from "../OrderPages/ReadyToShip";
import Shipped from "../OrderPages/Shipped"
import Uploads from "../Uploads/Uploads";
import Uploadimg from "../Uploads/Uploadimg";
import Variation from "../Uploads/Variation";
import Uploadsuccess from "../Review/Uploadsuccess";

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
              {
                path: "pending-orders",
                element: <Private><PendingOrders /></Private>,
              },
              {
                path: "ready-to-ship",
                element: <Private><ReadyToShip /></Private>,
              },
              {
                path: "shipped",
                element: <Private><Shipped /></Private>,
              },
              {
                path: "uploads",
                element: <Private><Uploads /></Private>,
              },
              {
                path: "uploading",
                element: <Private><Uploadimg /></Private>,
              },
              {
                path: "variation",
                element: <Private><Variation /></Private>,
              },
              {
                path: "success",
                element: <Private><Uploadsuccess /></Private>,
              },
            ]
        },
  ]);

  return element;
};

export default AllRoutes;
