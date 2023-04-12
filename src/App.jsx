import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import LandingPageHead from "./Components/Header/LandingPageHead";
import { useParams } from 'react-router-dom'

const App = () => {
  const [ show, setShow ] = useState(false);
  const { id } = useParams()
  console.log(id)
  return (
    <div style={{  maxWidth: "1500px"}}>
      {show ? <Header /> : <LandingPageHead />}
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
