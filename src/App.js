import React from 'react';
import Header from './Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Footer/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
      </Routes>

      <Footer />



      {/* <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/pairing' element={<Pair/>}/>
      </Routes> */}
    </BrowserRouter>


  );
};

export default App;