import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

function change(){
    localStorage.setItem("islogin","true");
    navigate("/dashboard");
}

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={change}>Login</button>
    </div>
  )
}

export default Login
