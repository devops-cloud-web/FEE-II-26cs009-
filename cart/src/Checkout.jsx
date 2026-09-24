

function Checkout({cart}){

const total=cart.reduce((sum,val)=> sum+=val.price,0)

    return (<>
        <h1>Total price: {total}</h1>
    </>)
}
export default Checkout