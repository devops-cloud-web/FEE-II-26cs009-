
import { UserContext } from "../App";
import { useContext } from "react";
function User(){

    const data=useContext(UserContext);

    return (<>
        <h1>Hello {data}</h1>
    </>)
}
export default User



