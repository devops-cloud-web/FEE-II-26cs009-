


import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {

    const nav = useNavigate();

function move(){
    nav("/login");
}
  return (
    <>
    <div id="contain">
            <h1>Home page</h1>
            <br />
            <button onClick={move}>Login</button>

    </div>
    </>
  )
}

export default Home
