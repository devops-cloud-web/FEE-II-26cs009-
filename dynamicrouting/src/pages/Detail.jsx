

import { useParams } from "react-router-dom";
function Detail(){

    const product=[
  {
    "id": 101,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "productName": "Wireless Headphones"
  },
  {
    "id": 102,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "productName": "Smart Watch"
  },
  {
    "id": 103,
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    "productName": "Bluetooth Speaker"
  }
]

    const {id}=useParams();
    const display=product.filter((val)=>val.id==Number(id))
    return (<>
        <h1> Product Details</h1>
        <h1>Product Id: {display[0].id} </h1>
        <img src={display[0].image} alt="sdf" />
        <h1>{display[0].productName}</h1>
    </>)
}
export default Detail