import React from 'react'
import { Routes } from 'react-router-dom';
import SellerRoutes from "./AllRoutes/SellerRoutes"
import SellerHeader from "./Header/SellerHeader"

const SellerRouting = () => {
  return (
    <div>
      <SellerHeader />
      <SellerRoutes />
    </div>
  )
}

export default SellerRouting