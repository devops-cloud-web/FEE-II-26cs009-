

import Product from "./Product"
function ProductList({cart,setCart}){

    let product = {
        id:101,
        productName:"Boat Soundbar",
        price: 5000
    }
    return (<>
        <Product product={product} cart={cart} setCart={setCart}/>
    </>)
}
export default ProductList;