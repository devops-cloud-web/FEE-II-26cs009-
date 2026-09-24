
import Home from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./pages/Navbar"
import Student from "./pages/Student"
import Profile from "./pages/Profile"
import Protected from "./pages/Protected"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
function App(){
  return (<>

    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}>
                  <Route path="profile" element={<Profile/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>

  </>)
}
export default App