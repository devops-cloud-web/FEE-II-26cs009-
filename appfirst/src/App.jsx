//Component: is a reusable, independent piece of the user interface (UI).
//Type of Component in React: 1. Functional Component   2. Class Component
        //1. Functional Component: a js function that returns jsx.
                // Component name must start with an uppercase letter.

                /*
                  function App(){
                      return <h1>Hello world</h1>
                  }

                  export default App */


        //2. Class Component: component created using a JavaScript class that extends React.Component.
                  //class  component extends Component
                  //render method used to return jsx.

            /* import React from "react";
                // import {Component} from "react"
                import Button from "./Component/Button"

                 class App extends React.Component{
                  render(){
                    return <Button/>
                  }
                 }

                 export default App
            */



            //JSX = javaScript and xml
                //a syntax extension that allow you to write html like code inside js
                //Syntax
                 //let const  = <h1>hello React</h1>

         //Rules of jsx
         //1.  JSX must have only one parent element. return one parent element. 
            //React fragment: feature of react that allow
             //to combine multiple element into single parent element.
              // short form of fragment. <> </>
         //2. Every tag must be closed.
            // <input type="text"/>
              // <img/>
          //3.   Use className instead of class , htmlFor
          //4.   Attribute Written in camelcase.
                 //onClick      
          //5. js expression use {}


/*

function App(){
    return (
        <React.Fragment>
            <h1>Hello React</h1>
            <button>Submit</button>
        </React.Fragment>
    )
}
export default App

*/


/*
function App(){
  let count=0;
  return <>
        <h1 className="btn">{count}</h1>
        <button>Count</button>
  </>
}
export default App

/*



//Before JSX, React developers had to create UI elements using React.createElement().
// import React from "react"

/*
function App(){
  return (
        React.createElement("h1",null,React.createElement("p",null,"jS"))
  )
}

export default App

*/


//props(properties): read only data that pass from parent component to a child component.

/*
import Button from "./Component/Button"
import "./App.css"

function App() {
  return (
    <div>
      <Button name="Submit"/>
      <Button name="Reset"/>
      <Button name="Cancel"/>
    </div>
  );
}

export default App

*/


//State: is variable managed by react that store data changes over time.
          //React update ui whenever state change.
          //React re-renders the component and updates the UI.

//Event handling:  Event handling in React is the process of responding to
    //  user actions or events, such as clicking a button, typing in an input field,
      //  or submitting a form, by using event handlers like onClick, onChange, and onSubmit.

//Problem before State
/*
function App() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
*/

//useState: is a react built function used in functional 
//Component to manage react feature like state,lifecycle etc.
//useState() is a React Hook that allows a functional component to store and manage changing data, called state.
//Syntax:  const [state, setState] = useState(initialValue);



import { Component } from "react"
import {useState} from "react";
function App(){

  const [a,b] = useState(0)
  return <>
      <h1>{a}</h1>
      <button onClick={()=>{b(a+1)}}>Increase</button>
      <button onClick={()=>{b(a-1)}}>Decrease</button>
      <button onClick={()=>{b(0)}}>Reset</button>
  </>
}

export default App


