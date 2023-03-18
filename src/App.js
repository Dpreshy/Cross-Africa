import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AllRoutes from './AllRoutes/AllRoutes';
import LandingPageHead from './Header/LandingPageHead';
const App = () => {

  const [ show, setShow ] = useState(true);
  return (
    <div>
      {
        show ? (<Header />) :
          (<LandingPageHead />)
      }
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
