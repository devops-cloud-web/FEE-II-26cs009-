
import {useState,useEffect} from "react"
import axios from "axios"
import "./App.css"
const App = () => {

  const [product,setProduct] = useState([]);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(true);
  const [currentPage,setCurrentPage] =useState(1);
  let productPerPage = 4;
  let totalPage = Math.ceil(product.length/productPerPage);
  let last = currentPage * productPerPage;
  let start = last-productPerPage;
  const productArray = product.slice(start,last);

  useEffect(()=>{
    const getProduct = async ()=>{
      try{
      let url="https://fakestoreapi.com/products";
          const res=await axios.get(url);
          setProduct(res.data);
          setLoading(false);
      }
      catch(err){setError(err);setLoading(false);}
    }
      getProduct();
  },[]);

  return (
    <div> 
      <h1>Product List</h1>
      <div className="productList">
            {productArray.map((val)=>(
              <div className="product">
                <div className="image">
                  <img src={val.image} alt="" />
                </div>
                  <h4>{val.title}</h4>
              </div>
            ))}
      </div>

      <button onClick={()=>setCurrentPage(currentPage-1)}
        disabled={currentPage==1}>Previous</button>

        {Array.from({length:totalPage},
          (_,index)=>index+1
        ).map((page)=>(
          <button onClick={()=>setCurrentPage(page)}
            className={currentPage==page ?"active":""}
          >{page}</button>
        ))
        }
         <button onClick={()=>setCurrentPage(currentPage+1)}
        disabled={currentPage==totalPage}>Next</button>

        <h3>Page {currentPage} of {totalPage}</h3>
    </div>
  )
}
export default App



