import React, { useState } from "react";
import Header from "./Components/Header/Header";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import LandingPageHead from "./Components/Header/LandingPageHead";
import { useParams } from 'react-router-dom'
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import PageRouting from "./Components/PageRouting";

const App = () => {
  // const [ show, setShow ] = useState(true)
  return (
    <div>
      {/* {show ? <Header /> : <LandingPageHead />} */}
      <Routes>
        <Route path="/*" element={ <PageRouting />} />
        <Route path="/seller-page" element={ <LandingPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
