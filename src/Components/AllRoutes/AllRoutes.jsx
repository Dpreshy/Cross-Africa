import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Category from "../Category/Category";
import SignUp from "../SigmUpAndSignIn/SignUp";
import SignIn from "../SigmUpAndSignIn/SignIn";
import Information from "../Information/Information";
import Detail from "../Detail/Detail";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import Allitems from "../Allitems/Allitems";
import ErrorOtp from "../ErrorOtp/ErrorOtp";
import Checkout from "../Payment/Checkout";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/category",
      children: [
        {
          index: true,
          element: <Category />,
        },
      ],
    },
    {
      path: "/auth",
      children: [
        {
          index: true,
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/information",
      element: <Information />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/allitems",
      element: <Allitems />,
    },
    {
      path: "/otperror",
      element: <ErrorOtp />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },

    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);

  return element;
};

export default AllRoutes;
