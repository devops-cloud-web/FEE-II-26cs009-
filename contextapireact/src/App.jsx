import Dashboard from "./pages/Dashboard"
import { createContext } from "react";


export const UserContext= createContext();



function App(){
  let login="React"
  return (<>
    
      <UserContext.Provider value={login}>
        <Dashboard/>
      </UserContext.Provider>

  </>)
}
export default App




