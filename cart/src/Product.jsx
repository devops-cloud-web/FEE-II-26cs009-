


function Product({cart,setCart,product}){

    function addtocart(){
        setCart([...cart,product])
    }

    return (<>
        <div>
                <h1>ProductName: {product.productName}</h1>
                <h2>Price: {product.price}</h2>
                <button onClick={addtocart}>Add to Cart</button>
        </div>

    </>)
}
export default Product