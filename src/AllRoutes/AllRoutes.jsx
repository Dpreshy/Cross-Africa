import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from '../Components/LandingPage/LandingPage';
import Category from "../Components/Category/Category";
import SignUp from "../Components/SigmUpAndSignIn/SignUp";
import SignIn from "../Components/SigmUpAndSignIn/SignIn";
import Information from "../Components/Information/Information";
import Detail from "../MComponent/Detail"
import Payment from "../Components/Payment/Payment";

const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/category",
            children: [
                {
                    index: true,
                    element: <Category />
                }
            ] 
        },
        {
            path: "/auth",
            children: [
                {
                    index: true,
                    element: <SignUp />
                },
                {
                    path: "signin",
                    element: <SignIn />
                }
            ]
        },
        {
            path: "/information",
            element: <Information />
        },
        {
            path: "/detail",
            element: <Detail />
        },
        {
            path: "payment",
            element: <Payment/>
        }
    ])

    return element
};

export default AllRoutes