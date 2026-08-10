//Memory Leak: A memory leak occurs when resources are not properly cleaned up after a component is removed,
        //  causing unnecessary memory or resources to remain in use.


//Side Effect: A side effect is an operation performed by a component that affects something outside of its normal rendering process.
 //Example:
 //1. Timer
 //2. Fetch API
 //3. Event Listener
 //4. localStorage
 
 //Syntax:   useEffect(callFunction,array Dependency);
            //useEffect(()=>{},[]);

            //Type of Array Dependency
             //1. No dependency array:  Runs after every render.
             //2. empty dependency array: Runs once after the initial render.
             //3. Dependency array with values: Runs after the initial render, Whenever count changes



/*
//Problem
import {useState} from "react"
function App(){
    const [count,setCount]=useState(0)
    setInterval(()=>{
        setCount(pre=>pre+1)
    },1000)
    return (<>
        <h1>{count}</h1>
    </>)
}
export default App
*/




/*
import {useEffect, useState} from "react"
function App(){
    const [count,setCount]=useState(0)
    

useEffect(()=>{
    let a=setInterval(()=>{
        setCount(pre=>pre+1)
    },1000)
    return ()=>clearInterval(a)
},[count])

    return (<>
        <h1>{count}</h1>
    </>)
}
export default App
*/





/*
//Fetch API
import {useEffect, useState} from "react"
function App(){
    const [count,setCount]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then((data)=>setCount(data))
    },[])


    return (<>
        {
            count.map((val)=>(
                <h1 key={val.id}>{val.title}</h1>
            ))
        }
    </>)
}
export default App

*/



//Stop Watch
import "./App.css"
import { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer(pre => pre + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setTimer(0);
    setData([]);
  }

  function lap() {
    setData([...data, timer]);
  }

  return (
    <>
      <h1>Stop Watch</h1>

      <h2>{timer}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
      <button onClick={lap}>Lap</button>

      {data.length === 0 ? (
        <p>No data</p>
      ) : (
        data.map((val, index) => (
          <p key={index}>Lap: {val}</p>
        ))
      )}
    </>
  );
}

export default App;




