 import "./App.css"
 import { useState } from "react"
 const App=()=>{
 
   let credential={
     username:"xyz",
     password:123
   }
   const [user,setUser]=useState("");
   const [pass,setPass] =useState("");
 
   function compare(e){
      e.preventDefault();
     if(user==credential.username && pass == credential.password){
       alert("success")
       setUser("");
       setPass("")
     }
     else alert("wrong")
   }
 
   return (<>
       <h1>Login Form</h1> 
       <form action="">
         <input type="text" placeholder="Enter username" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
         <input type="password" placeholder="********" value={pass} onChange={(e)=>setPass(e.target.value)}/>
         <button onClick={compare}>Submit</button>
       </form>
 
   </>)
 }
 export default App



/*
 import { useState } from "react";

function App() {
  let [user, setUser] = useState({
    username: "",
    password: ""
  });

  function check(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function submit(e) {
    e.preventDefault();

    if (user.username === "xyz" && user.password === "123") {
      alert("success");

      setUser({
        username: "",
        password: ""
      });
    } else {
      alert("Wrong");
    }
  }

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={submit}>
        <input
          type="text" name="username" value={user.username} onChange={check} placeholder="Enter username" />
        <br />
        <input type="password" name="password" value={user.password} onChange={check} placeholder="*********"/>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;

*/