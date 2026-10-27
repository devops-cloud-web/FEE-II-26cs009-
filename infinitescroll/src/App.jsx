
import React from 'react'
import {useState,useEffect,useRef} from "react"
import axios from "axios"
import "./App.css"
const App = () => {
  const [product,setProducts] = useState([]);
  const [visibleCount,setVisibleCount] = useState(8);
  const loadref = useRef(null);

  useEffect(()=>{

    const getProduct = async ()=>{
          const res = await axios.get("https://fakestoreapi.com/products");
          setProducts(res.data);
    }
    getProduct();
  },[]);


  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
          if(entries[0].isIntersecting){
            setVisibleCount(prev=>Math.min(prev+4,product.length));
          }
    },{threshold:0.5});

    let loader = loadref.current;
    if(loader)
      observer.observe(loader);

    return ()=>observer.disconnect();
  },[visibleCount,product.length]);

  return (
    <div>
      <h1>Product List</h1>
      <div className="productList">
        {product.slice(0,visibleCount).map((val)=>(
          <div className="product">
            <img src={val.image} alt="" />
            <h4>{val.title}</h4>
          </div>
        ))}
      </div>

      <div ref={loadref}>
          {visibleCount<product.length?"scroll for more product":
          "all product visible"}
      </div>
    </div>
  )
}

export default App
