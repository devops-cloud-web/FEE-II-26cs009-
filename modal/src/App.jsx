

import React from 'react'
import "./App.css"
import {useState} from "react"
const App = () => {

  const [modal,setModal] = useState(false);

  return (
    <div>
      <h1>React Modal</h1>
      <button onClick={()=>setModal(true)}>Open Modal</button>
      {modal && (
        <div className="modal-overlay">
        <div className="modal">
          <h4>Data Saved Successfully</h4>
          <button onClick={()=>setModal(false)}>Close</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default App
