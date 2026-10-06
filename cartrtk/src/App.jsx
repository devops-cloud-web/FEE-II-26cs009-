import "./App.css"
import { useSelector,useDispatch} from "react-redux";
import { addtocart } from "./features/cartSlice";
import { fetchProducts } from './features/productSlice';
import Cart from "./Cart";
function App(){
  const items = useSelector(state=>state.cart.items);
  const dispatch = useDispatch();

  const {product,loading,error} = useSelector(state=>state.products);
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error: {error}</h1>
  
  let productArray = product.data || [];
  


  return (<>
    <div className="container">
      <button onClick={()=>dispatch(fetchProducts())}>Fetch Product</button>
        <h1>Cart count: {items.length}</h1>
          <div className="productlist">
            {productArray.map((product)=>(
              <div className="product">
                  <img src={product.image} alt="" />
                  <h1>{product.name}</h1>
                  <h1>{product.title}</h1>
                  <h1>{product.price}</h1>
                  <button onClick={()=>dispatch(addtocart(product))}>Add to Cart</button>
              </div>
            ))}
          </div>
          <Cart/>
    </div>
  </>)
}
export default App





