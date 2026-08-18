/*
useRef is a React Hook that allows you to:
1. Access and manipulate DOM elements directly.
2. Store a value that persists between renders — the value remains available even when the component re-renders.
3. Store mutable data without causing a re-render.
4. Store the previous value.

Syntax: const inputRef = useRef(null);

{ 
 current:null
}
*/





/*
import {useRef} from "react"
function App(){

  const inputVal = useRef(null);

  function highlight(e){
    e.preventDefault();
    console.log(inputVal.current);
    inputVal.current.focus();
    console.log(inputVal.current.value);
    //inputVal.current.value="React"
  }
  return (<>
    <form action="">
      <input type="text" ref={inputVal}/>
      <button onClick={highlight}>Focus</button>
    </form>
  </>)
}
export default App
*/




/*
import {useState,useRef} from "react"
function App(){

  const [count,setCount] = useState(0)
  const number = useRef(0)
  function increase(){
    number.current++;
    console.log(number.current);
        setCount(pre=>pre+1);
  }
  return (<>
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </>)
}
export default App
*/





/*
useMemo is a React Hook used to memoize (cache) the result 
of an expensive calculation so that it is not recalculated on every render.

Syntax: 
const memoizedValue = useMemo(() => {
  return calculation;
}, [dependencies]);
*/



/*
import {useState,useMemo} from "react"
function App(){

  const [count,setCount]= useState(0);

  const add = useMemo(()=>{
       console.log("running");
        let sum=0;
        for(let i=0;i<1000000;i++){
          sum+=i;
        }
        return sum;
  },[]);


  function increase(){
      setCount(pre=>pre+1);
  }

 return (<>
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <h1>{add}</h1>
 </>)
}
export default App

*/



/*
useCallback is a React Hook used to memoize (cache) a function 
so that the same function reference can be reused between render

Syntax:
const memoizedFunction = useCallback(() => {
  // code
}, [dependencies]);
*/



/*
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={handleClick}>
        Click
      </button>
    </>
  );
}

export default App;

*/






/*
React.memo is a higher-order component (HOC) used to prevent a functional component
 from re-rendering when its props have not changed.
 Syntax:
 const MemoizedComponent = React.memo(Component);
 */


/*

 import {useCallback, useState,memo} from "react"

const Child=memo(function Child({handle}){
  console.log("Child");
  return <button onClick={handle}>Child</button>
})

function App(){

  const [count,setCount] = useState(0)

  function increase(){
      setCount(pre=>pre+1);
  }

  const handleClick=useCallback(()=>{
    console.log("Handle Click run");
  },[])
  
  return (<>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <Child handle={handleClick}/>
  </>)
}
export default App


*/