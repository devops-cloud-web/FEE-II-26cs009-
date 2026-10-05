import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from './features/productSlice'

const App = () => {
  const {items,loading,error} = useSelector(state=>state.products)
  let productsArray = [];
if (items && items.products) {
  productsArray = items.products;
}
  
  const dispatch = useDispatch();
  
  function fetchdata(){
       dispatch(fetchProduct()) 
  }

  if(loading) return  <h1> Loadding</h1>
  if(error) return <h1>Failed to fetch</h1>

  return (
    <div>
      {console.log(items)}
      <button onClick={fetchdata}>Fetch Product</button>
      {productsArray.map((val)=>(
        <div>
          <h1>{val.title}</h1>
          <h1>{val.price}</h1>
        </div>
      ))}
    </div>
  )
}

export default App
