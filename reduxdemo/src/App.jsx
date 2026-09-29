


import React from 'react'
import {useSelector,useDispatch} from "react-redux"

const App = () => {

  const count = useSelector(state=>state.count)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Counter application</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch({type:"increase"})}>+</button>
    </div>
  )
}

export default App
