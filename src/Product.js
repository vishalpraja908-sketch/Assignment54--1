function Product(data) {
  return (
    <div className="Vishal">
      <img
        src={data.photo}
        alt={data.title}
      />
      <div className="text-gray-500 text-xs">{data.category}</div>
      <div className="text-2xl">{data.title}</div>
    
<div className="text-yellow-500 text-sm">{"⭐".repeat(data.rating)} ({data.rating})</div>
<div className=" ">${data.price}</div>

    </div>

  );
}

export default Product;
