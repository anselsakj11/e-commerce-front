// get product id from url useParam()
//get product data from backend
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import ProductPanel from "../components/ProductPanel";
import Reviews from "../components/Reviews";
import ReviewsList from "../components/ReviewsList";
import "./Product.css";
function Product() {
  const { productId } = useParams();
  const [pageProduct, setPageProduct] = useState({});

  // Call backend for products data
  // Product() -> fetch() -> setPageProduct(productData) -> Product()

  useEffect(() => {
    console.log(
      `Calling endpoint: http://localhost:3000/products/${productId}`
    );

    fetch(`http://localhost:3000/products/${productId}`)
      .then((response) => response.json())
      .then((productData) => {
        console.log("Data that we got: ");

        console.log(productData);

        setPageProduct(productData);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="main-area">
        <ProductPanel imgs={pageProduct.imgs}></ProductPanel>
        <ProductDetails product={pageProduct}></ProductDetails>
      </div>
      <div className="second-area">
        <Reviews></Reviews>
        <ReviewsList product={pageProduct}></ReviewsList>
      </div>
    </div>
  );
}

export default Product;

// function Product() {
//   const params = useParams();
//   const { productId } = params;
//   const [product, setProduct] = useState({});
//   useEffect(() => {
//     // Make API call to fetch product details
//     fetch(`/api/products/${productId}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data));
//   }, [productId]);

//   console.log("Product component rendered:", product);

//   return (
//     <div>
//       <Navbar />
//       {product && (
//         <div className="main-area">
//           <div className="left-side">
//             {product.img &&
//               product.img.map((imgUrl, index) => (
//                 <img key={index} src={imgUrl} alt="" className="side-img" />
//               ))}
//             <div className="corner-img">
//               {product.img &&
//                 product.img.map((imgUrl, index) => (
//                   <img key={index} src={imgUrl} alt="" className="side-img" />
//                 ))}
//             </div>
//           </div>
//           <div className="right-side">
//             <h1 className="product-title">{product.name}</h1>
//             <div className="reviwes-div">
//               {product.review &&
//                 product.review.map((review, index) => (
//                   <i key={index} className="fa-solid fa-star" />
//                 ))}
//             </div>
//             <div className="colors-div">
//               {product.colors &&
//                 product.colors.map((color, index) => (
//                   <div key={index} className={`color ${color}-color`} />
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Product;
