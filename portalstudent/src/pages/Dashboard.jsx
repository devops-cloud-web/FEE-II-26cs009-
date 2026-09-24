import React from 'react'
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem("islogin");
        navigate("/login")
    }
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard
