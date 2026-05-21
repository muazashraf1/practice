import React from 'react'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage'
import SingleProduct from './SingleProduct'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App