

import { Navigate } from 'react-router-dom';
import React from 'react'

const Protected = ({children}) => {
    const isLogin=localStorage.getItem("islogin");
    if(!isLogin) return (<Navigate to="/login"/>)
  return (
    <div>
      {children}
    </div>
  )
}

export default Protected
