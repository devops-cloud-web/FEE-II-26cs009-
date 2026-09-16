


import React from 'react'
import {Link,NavLink} from "react-router-dom"
const Header = () => {
  return (
   <div className="header">
    <h1>Codespot</h1>
    <nav>
        <NavLink to="home" className={({isActive})=>isActive?"active":""}>Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="service">Service</NavLink>
        <NavLink to="contact" className={({isActive})=>isActive?"active":""}>Contact</NavLink>
        <NavLink to="login" className={({isActive})=>isActive?"active":""}>Login</NavLink>
        </nav>
   </div>
  )
}

export default Header
