import InputField from "./InputField"
import { useState } from "react";
const App=()=>{

  const [form,setForm] = useState({
    user:"",
    pass:""
  });

  function handle(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }
  function save(){
    console.log(form);
  }

  return (<>
        <h1>Resubale Input Component</h1>
        <InputField type="email" name="user" onChange={handle}
          placeholder="Enter username" value={form.user}
        /> <br />
        <InputField type="password" name="pass" onChange={handle}
          placeholder="********" value={form.pass}
        />
        <button onClick={save}>Login</button>
  </>)
}
export default App