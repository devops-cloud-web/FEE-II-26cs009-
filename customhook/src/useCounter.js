
import {useState} from "react"
function useCounter(){

    const [count,setCount] = useState(0);

    function increase(){
        setCount(pre=>pre+1)
    }
    function decrease(){
            setCount(pre=>pre-1);
    }
    return {count,increase,decrease}

}
export default useCounter;