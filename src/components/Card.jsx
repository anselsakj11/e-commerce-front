// import "./Card.css";

// //get product id as prop
// function Card({ title, price, imgUrl, colors }) {
//   return (
//     //fute te gjithe kte div ne Link
//     // <Link to={'product/{productId}}
//     <div className=" pb-1  w-25 d-flex flex-column">
//       <img src={imgUrl} alt="" />
//       <p className="first-p">{title}</p>
//       <span className="price-s">${price}</span>
//       <p className="second-p">{colors}</p>
//     </div>
//   );
// }

// export default Card;

// // localhost:3000/products/1
// // localhost:3000/products/2

import "./Card.css";
import { Link } from "react-router-dom";
function Card({ productId, imgUrl, name, price, colors }) {
  return (
    <Link
      to={`/product/${productId}`}
      className=" pb-1 w-25 d-flex flex-column"
      style={{ textDecoration: "none ", color: "inherit " }}
    >
      {/* <img src={product.imgUrl} alt="" />
      <p>{product.name}</p>
      <span>${product.price}</span> */}
      <img src={imgUrl} alt="" />
      <p className="first-p">{name}</p>
      <span className="price-s">${price}</span>

      <p className="second-p">{colors}</p>
    </Link>
  );
}

export default Card;
