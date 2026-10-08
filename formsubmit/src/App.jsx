




import React from 'react'
import {useState} from "react"
const App = () => {

  const [form,setForm] = useState({
    user:"",
    pass:"",
    select:"",
    check:""
  });
  
  const [sub,setSub] = useState(null);

  
  function handle(e){
    const {name,value,checked,type} = e.target
      setForm({...form,
        [name]:  type=="checkbox"?checked:value      //compute value. use variable value as object key
      });
  }


  function submit(e){
    e.preventDefault();
     setSub(form);
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={submit}>
        <input type="text" name="user" value={form.user} onChange={handle}/> <br />
        <input type="password" name="pass" value={form.pass} onChange={handle}/> <br />
        <select name="select" onChange={handle}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select><br />
          <input type="checkbox" name="check" checked={form.check} onChange={handle} />
          <span>agree term and condition</span><br />
        <button type="submit">Submit</button>
      </form>
      {sub && (
        <div>
          <h1>{sub.user}</h1>
          <h1>{sub.pass}</h1>
          <h1>{sub.select}</h1>
          <h1>{sub.check?"Yes":"NO"}</h1>
        </div>
      )}
    </div>
  )
}

export default App


