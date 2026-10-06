
import React from 'react'
import { useSelector,useDispatch} from "react-redux";
import { clearcart,removecart } from "./features/cartSlice";
const Cart = () => {

    const items = useSelector(state=>state.cart.items);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Shoping Cart</h1>
       <div className="productlist">
                  {items.map((product)=>(
                    <div className="product">
                        <img src={product.image} alt="" />
                        <h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                        <button onClick={()=>dispatch(removecart(product.id))}>Delete</button>
                    </div>
                  ))}
                </div>
                <button onClick={()=>dispatch(clearcart())}>Delete All</button>
    </div>
  )
}

export default Cart
