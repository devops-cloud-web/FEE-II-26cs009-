

import React from 'react'
import "./App.css"
import {useSelector,useDispatch} from "react-redux"
import {addtocart} from "./features/cartReducer"
import Cart from './Cart'

const App = () => {

const items = useSelector(state=>state.cart.items);
const dispatch= useDispatch();

const products = [
    {
        id: 1,
        name: "Essence Mascara",
        price: 10,
        image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    },
    {
        id: 2,
        name: "Red Lipstick",
        price: 13,
        image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
    },
    {
        id: 3,
        name: "Calvin Klein CK One",
        price: 50,
        image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
    },
    {
        id: 4,
        name: "Chanel Coco Noir",
        price: 130,
        image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
    },
    {
        id: 5,
        name: "Dior J'adore",
        price: 90,
        image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp"
    },
    {
        id: 6,
        name: "Apple",
        price: 2,
        image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
    }
];

  return (
    <div className="container">
      <h1>Cart Count: {items.length}</h1>
      <div className="productlist">
        {products.map((product)=>(
          <div className="product">
              <img src={product.image} alt="" />
              <h1>{product.name}</h1>
              <h1>{product.price}</h1>
              <button onClick={()=>dispatch(addtocart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Cart/>
    </div>
  )
}

export default App
