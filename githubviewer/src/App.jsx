
import { useState } from "react";
const App=()=>{

  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);
  const [repo,setRepo] = useState([])

  async function searchUser(e){
          e.preventDefault();
        let url=`https://api.github.com/users/${encodeURIComponent(username)}`;
        try{
          setLoading(true)
        const res = await fetch(url);
        const data = await res.json();
        setUser(data);
        console.log(data);

        let url2 =`https://api.github.com/users/${encodeURIComponent(username)}/repos`
        const res2 = await fetch(url2);
        const data2 = await res2.json();
        setRepo(data2);
        console.log(data2)



        }
        catch(err){setError(err)}
        finally{setLoading(false)}
  }
  return (<>
      <h1>GitHub Profile Viewer</h1>
      <form action="">
        <input type="search" value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <button onClick={searchUser}>{loading?"Searching":"Search"}</button>
      </form>
      {error && <span>{error}</span>}

      {user && (<>
          <img src={user.avatar_url} alt="" />
          <h2>{user.followers}</h2>
          <h2>{user.name}</h2>
          <h2>{user.login}</h2>
          <a href={user.html_url}>View Profile</a>
      </>)}

      {repo.map((val)=>(
        <>
        <a href="">{val.name}</a>
        </>
      ))}

  </>)
}
export default App




