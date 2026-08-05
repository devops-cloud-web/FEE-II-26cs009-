
import "./App.css"
function App(){

   const products = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Running Shoes"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Watch"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Headphones"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Camera"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    title: "Smartphone"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    title: "Laptop"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    title: "Backpack"
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    title: "T-Shirt"
  },
{
  id: 9,
  imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
  title: "Sandal"
},
{
  id: 10,
  imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  title: "Sunglasses"
},
{
  id: 11,
  imageUrl: "https://images.unsplash.com/photo-1580894908361-967195033215",
  title: "Office Desk Setup"
},
{
  id: 12,
  imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657",
  title: "Wooden Table"
}
];


  return (<>
        <div className="container">
          {products.map((val)=>(
            <div className="card" >
              <img src={val.imageUrl} alt="" />
              <h1>{val.title}</h1>
            </div>
          ))}
        </div>
  </>)
}
export default App