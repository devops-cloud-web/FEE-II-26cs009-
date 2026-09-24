


import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link> {" | "}
        <Link to="/student">Student</Link> {" | "}
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <hr />
    </div>
  )
}

export default Navbar
