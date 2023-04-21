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
import Accreview from "../Review/Accreview";
import Allitems from "../Allitems/Allitems";
import ErrorOtp from "../ErrorOtp/ErrorOtp";
import Checkout from "../Payment/Checkout";
import Shipping from "../Payment/Shipping";
import Finishshipping from "../Payment/Finishshipping";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Otppage from "../OtpPage/Otppage";
import Bankdetails from "../SigmUpAndSignIn/Bankdetails";
import Businessinfo from "../SigmUpAndSignIn/Businessinfo";
import PersonalInfo from "../SigmUpAndSignIn/PersonalInfo";
import Productpage from "../SigmUpAndSignIn/Productpage";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Category />,
        },
        {
          path: "/auth",
          children: [
            {
              index: true,
              element: <SignUp />,
            },
            {
              path: "user",
              element: <SignUp />,
            },
            {
              path: "signin",
              element: <SignIn />,
            },
            {
              path: "verify",
              element: <Otppage />,
            },
            {
              path: "information",
              element: <Information />,
            },
            {
              path: "bankdetails",
              element: <Bankdetails />,
            },
            {
              path: "businessinfo",
              element: <Businessinfo />,
            },
            {
              path: "personalInfo",
              element: <PersonalInfo />,
            },
            {
              path: "review",
              element: <Review />,
            },
            {
              path: "acct-review",
              element: <Accreview />,
            },
          ],
        },
        {
          path: "/allitems",
          element: <Allitems />,
        },
        {
          path: "/product",
          element: <Productpage />,
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
          path: "/finishshipping",
          element: <Shipping />,
        },
        {
          path: "/shipping",
          element: <Finishshipping />,
        },
    
        {
          path: "/detail",
          element: <Detail />,
        },
        {
          path: "/seller-dashboard",
          element: <Dashboard />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
      ],
    },
  
  
  ]);

  return element;
};

export default AllRoutes;
