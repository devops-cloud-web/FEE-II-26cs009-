

import {useState} from "react"
import Navbar from "./Navbar"
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
function App(){

  const [cart,setCart] = useState([]);

  return (<>
      <Navbar cart={cart}/>
      <ProductList cart={cart} setCart={setCart}/>
      <Cart cart={cart}/>
      <Checkout cart={cart}/>
  </>)
}
export default App