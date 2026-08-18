import {useState} from "react"
function useInput(){

    const [input,setInput]= useState();
    function inputhandle(e){
        setInput(e.target.value)
    } 
    return {input,
        onChange: inputhandle
    }
}

export default useInput