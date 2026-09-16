






import React from 'react'
import Header from './component/Header'
import "./App.css"
import Home from './component/Home'
import Login from "./component/login"
import {Routes,Route,useNavigate} from "react-router-dom"
import About from './component/About'

const App = () => {



  return (
    <>
      <div className="container">
        <Header />
      </div>
      

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>



    </>

  )
}

export default App






