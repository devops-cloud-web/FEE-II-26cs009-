

function Cart({cart}){
    return (<>
            <h1>Shoping Cart</h1>
            {cart.map((val)=>(
                <div style={{border:"2px solid black",margin:"10px"}}>
                <h2>{val.productName}</h2>
                <h2>{val.price}</h2>
                </div>
            ))}
    </>)
}
export default Cart;