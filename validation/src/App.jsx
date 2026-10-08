


import "./App.css"
import {useState} from "react"
function App(){

  const [form,setForm] = useState({
    user:"",
    pass:"",
    file:""
  });
  const [error,setError] = useState({});
  const [preview,setPreview] = useState(null);

  const [sub,setSub] = useState(null);

  function handle(e){
    const {name,value} = e.target;
    setForm({...form,
        [name]:value
    })
  }

function validate(){
  let newError={}
  if(!form.user.trim())
    newError.user = "username is empty"
   else if(form.user.length<3)
    newError.user = "username greater than 3 character"

   if(!form.pass)
    newError.pass = "password is empty"
    else if(form.pass.length<8)
      newError.pass = "password mustbe greater than 8 character"

    setError(newError);
    return Object.keys(newError).length==0;
}

  function save(e){
        e.preventDefault();
        if(validate()) setSub(form);
  }

  function uploadImage(e){
    console.log("323523");
    let image = e.target.files[0];
    const url = URL.createObjectURL(image);
    setPreview(url)

    setForm({
      ...form,
      "file":image
    })

  }

  return (<>
      <h1>Login Form</h1>
      <form onSubmit={save}>
        <input type="text" value={form.user} name="user"
            placeholder="Enter username" onChange={handle}
         /> <br />
         {error.user && <span style={{color:"red"}}>{error.user}</span>}
          <br />
        <input type="password" value={form.pass} name="pass"
            placeholder="********" onChange={handle} /> <br />
          {error.pass && <span style={{color:"red"}}>{error.pass}</span>}
          <br />

            {
                preview && (
                  <div>
                    <img src={preview} alt="sdf" />
                  </div>
                )

            }

          <input type="file" name="file"
           onChange={uploadImage}  /><br />

        <button type="submit" className="login">Login</button>
      </form>
      {sub && (
        <div>
          <h1>Username: {sub.user}</h1>
          <h1>Password: {sub.pass}</h1>
        </div>
      )}
  </>)
}
export default App