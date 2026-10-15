

const products = [
{ id: 1, name: "HP Laptop", category: "Laptop", price: 45000 },
{ id: 2, name: "Dell Laptop", category: "Laptop", price: 55000 },
{ id: 3, name: "Samsung Mobile", category: "Mobile", price: 25000 },
{ id: 4, name: "iPhone", category: "Mobile", price: 60000 },
{ id: 5, name: "Nike Shoes", category: "Shoes", price: 3000 },
{ id: 6, name: "Adidas Shoes", category: "Shoes", price: 5000 },
];

import {useState} from "react"
const App=()=>{
  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("All");
  const [sort,setSort] = useState("default");
  const [range,setRange] = useState(100000);

  const filterProduct =products.filter((product)=>{
                 const ab= product.name.toLowerCase().includes(
                    search.toLowerCase());
                 const xy =filter=="All" || filter==product.category;  
                 const abc = product.price <range;
                 return ab && xy && abc;
                });

     const sortProduct = [...filterProduct].sort((a,b)=>{
            if(sort=="lowtohigh")
              return a.price -b.price;
            if(sort=="hightolow")
              return b.price -a.price;
            return 0;
     });

  return (<>
     <h1>Search</h1>
     <input type="search" value={search}
       onChange={(e)=>setSearch(e.target.value)}/>

    <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Laptop">Laptop</option>
      <option value="Mobile">Mobile</option>
      <option value="Shoes">Shoes</option>
    </select>

    <select value={sort} onChange={(e)=>setSort(e.target.value)}>
      <option value="default">default</option>
      <option value="lowtohigh">Low To High</option>
      <option value="hightolow">High to Low</option>
    </select>

      <label htmlFor="">{range}</label>
      <input type="range" value={range} min="1000" max="100000" 
        onChange={(e)=>setRange(e.target.value)}/>


      {sortProduct.map((product)=>(
        <div>
          <h1>{product.name}--{product.price}</h1>
        </div>
      ))}

  </>)
}
export default App







