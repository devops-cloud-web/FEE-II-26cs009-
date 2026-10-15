

import {useState} from "react"
import Order from "./Order";
function App(){

  const [page,setPage] = useState("profile");

    return (<>
        <h1>My Account</h1>
        <button onClick={()=>setPage("profile")}>Profile</button>
        <button onClick={()=>setPage("orders")} >Orders</button>
        <button onClick={()=>setPage("setting")} >Setting</button>
        <hr />

      {page =="profile" && <h1>Profile Page</h1>}
      {page =="orders" && <Order/>}
      {page =="setting" && <h1>Setting Page</h1>}


  </>)
}
export default App