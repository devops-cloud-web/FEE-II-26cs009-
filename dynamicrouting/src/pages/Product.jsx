
import {Link} from "react-router-dom"
function Product(){
    return (<>
        <h1>Product List</h1>
        <nav>
            <Link to="/product/101">HeadPhone 101</Link> <br />
            <Link to="/product/102">SmartWatch 102</Link><br />
            <Link to="/product/103">Speaker 103</Link>
        </nav>
    </>)
}
export default Product;