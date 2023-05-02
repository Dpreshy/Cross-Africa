import React, { useState } from "react";
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import PageRouting from "./Components/PageRouting";
import Private from "./Components/Private";
import SellerRouting from "./Components/SellerRouting";
import AdminRoutePage from "./Components/AdninRoutePage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={ <PageRouting />} />
        <Route path="/admin-dashboard/*" element={ <AdminRoutePage />} />
        <Route path="/seller-page/*" element={ <LandingPage />} />
        <Route path="/seller-dashboard/*" element={ <Private><SellerRouting /></Private>} />
      </Routes>
      
     
    </div>
  );
};

export default App;
