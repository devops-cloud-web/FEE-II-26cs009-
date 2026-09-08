
import Card from "./Card"
function CardList(){
    
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
  },{
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
  }
      ]

    return (<>
        <div className="cardlist">
            {
                products.map((val)=>(
                    <Card data={val}/>
                ))
            }
        </div>
    </>)

}
export default CardList