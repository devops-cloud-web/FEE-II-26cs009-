
function Button(props){
console.log(props)
    let abc = {
        color:"red",
        background:"yellow"
    }
    return <button className="btn">{props.name}</button>
    //return <button style={abc}>{props.name}</button>
    //return <button style={{color:"red"}}>{props.name}</button>
}


/*
function Button(props){
     return (<>
            <Button>props.name</Button>
            <Button>props.name</Button>
            <Button>props.name</Button>
     </>)
}

*/

/*
//Rendering List

function Button(props){
    return (<>
            <ul>
                {props.age.map((val)=>(
                    <li>{val}</li>
                ))
            }
            </ul>
    </>)
}
*/
export default Button;