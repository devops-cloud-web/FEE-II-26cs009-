
import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { increase,decrease, reset } from './features/counterSlice';
const App = () => {

  const dispatch = useDispatch();
  const count = useSelector(state=>state.count)
  
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increase())}>+</button>
      <button onClick={()=>dispatch(decrease())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
