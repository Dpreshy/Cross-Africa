import React from 'react'
import AllRoutes from './AllRoutes/AllRoutes';
import Header from './Header/Header';
import { Routes } from 'react-router-dom';

const PageRouting = () => {
  return (
      <div>
          <Header />
      <AllRoutes />
          
    </div>
  )
}

export default PageRouting