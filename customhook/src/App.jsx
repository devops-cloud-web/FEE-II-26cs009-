/*
Custom Hook: A Custom Hook is a JavaScript function in React that allows you to reuse 
             stateful logic between multiple components.

Rules
Its name must start with use.
It can use other React Hooks like useState, useEffect, useRef, etc.
It helps reuse logic, not UI.

Syntax: 
function useCustomHook() {
  // React Hooks and logic
  return value;
}

*/




/*
import useCounter from "./useCounter"
function App(){

  const {count,increase,decrease}=useCounter();
  return (<>
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </>)
}
export default App
*/







/*
import useInput from "./useInput"
function App(){

  const name=useInput();
  const pass=useInput();

  return (<>
  <input type="text" {...name} />
  <input type="text" {...pass} />
  <h1>{name.input}</h1>
  <h1>{pass.input}</h1>
  </>)

}
export default App
*/



/*

import useFetch from "./useFetch";

function App() {
  const data = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
*/





















