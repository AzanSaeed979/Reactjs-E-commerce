import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProductPage from './pages/listProduct/ListProductPage'
import ProductDetails from './pages/productDetails/ProductDetails'
import ProductCart from './pages/productCart.jsx/ProductCart'
import Header from './component/header/Header'
import LoginCode from './component/loginCode/LoginCode'
import SignUpCode from './component/signupcode/SignUpCode'

const App = () => {
  return <Fragment>
        <Header />
      <Routes>
        <Route path='/listproduct' element={<ListProductPage />} />
        <Route path='/listproduct/:id' element={<ProductDetails />} />
        <Route path='/productcart' element={<ProductCart />} />
        <Route path='/signupcode' element={<SignUpCode />} />
        <Route path='/logincode' element={<LoginCode />} />


      </Routes>
    </Fragment>
  
}

export default App