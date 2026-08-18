/*
Lifting State Up means moving the state from a child component to their closest common parent
 component so that multiple child components can share and use the same state.

*/


import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Input name={name} setName={setName} />
      <Display name={name} />
    </>
  );
}

function Input({ name, setName }) {
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

function Display({ name }) {
  return <h2>Hello {name}</h2>;
}

export default App;