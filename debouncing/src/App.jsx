
import {useState,useEffect} from "react"
const App=()=>{
  const [search,setSearch] = useState("");
  const [debounce,setDounce] = useState("");

  useEffect(()=>{
    const timer =setTimeout(()=>{
      setDounce(search)
    },500)
    return ()=>clearInterval(timer);
  },[search])

  useEffect(()=>{
    // API request
    console.log("Send api request")
  },[debounce]);

  return (<>
      <h1>Debounce</h1>
      <input type="search" value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <h3>Search: {search}</h3>
      <h3>Send API Request: {debounce}</h3>
  </>)
}
export default App



