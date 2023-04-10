import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import LandingPageHead from "./Components/Header/LandingPageHead";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <Header /> : <LandingPageHead />}
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
