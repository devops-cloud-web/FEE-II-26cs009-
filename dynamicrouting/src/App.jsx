import React from 'react'
import Product from './pages/Product'
import Detail from './pages/Detail'
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
    <Product/>
        <Routes>
          <Route path="/product/:id" element={<Detail/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
