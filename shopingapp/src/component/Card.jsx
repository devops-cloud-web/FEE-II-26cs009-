

function Card({data}){
    return (<>
    <div className="card">
        <img src={data.imageUrl} alt="" />
        <h3>{data.title}</h3>
        <h5>Price: $20</h5>
        <button>Add to Cart</button>
    </div>
    </>)
}
export default Card