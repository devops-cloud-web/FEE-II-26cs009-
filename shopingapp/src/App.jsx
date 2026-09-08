
import "./App.css"
import Header from "./component/Header"
import Navbar from "./component/Navbar"
import Aside from "./component/Aside"
import Footer from "./component/Footer"
import CardList from "./component/CardList"
function App(){
  return (<>
      <div className="container">
          <Header/>
          <Navbar/>
          <div className="main">
            <Aside/>
            <div className="content">
                <h1>Product</h1>
                <CardList/>
            </div>
          </div>
          <Footer/>
      </div>
  </>)
}
export default App