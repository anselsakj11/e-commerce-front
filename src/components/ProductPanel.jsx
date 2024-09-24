import "./ProductPanel.css";
import { useParams } from "react-router-dom";
import luggage2 from "../assets/luggage2.webp";
import luggage from "../assets/luggage.webp";
import luggage3 from "../assets/luggage3.webp";
import bag from "../assets/bag.webp";
import { useState, useEffect } from "react";

// function ProductPanel({ imgs }) {
//   console.log(imgs);

//   return (
//     <div className="img-area">
//       <div className="left-images">
//         {/* {imgs &&
//           imgs.map((img, index) => {
//             return (
//               <img key={index} className="main-img" src={img} alt="Product" />
//             );
//           })} */}
//         <img className="main-img" src={luggage} alt="Product Image" />
//         <img className="main-img" src={bag} alt="Product Image" />
//         <img className="main-img" src={luggage2} alt="Product Image" />
//         <img className="main-img" src={luggage3} alt="Product Image" />
//       </div>
//       {/* <div className="big-img"> */}
//       <img className="main-img" src={luggage} alt="Product Image" />
//       {/* </div> */}
//     </div>
//   );
// }

function ProductPanel({ imgs }) {
  const images = [luggage, bag, luggage2, luggage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(imgs);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="img-area">
      <div className="left-images">
        {imgs &&
          imgs.map((img) => {
            return <img className="main-img" src={img} alt="Product" />;
          })}
        {/* <img className="main-img" src={luggage} alt="Product Image" />
        <img className="main-img" src={bag} alt="Product Image" />
        <img className="main-img" src={luggage2} alt="Product Image" />
        <img className="main-img" src={luggage3} alt="Product Image" /> */}
      </div>
      <button className="prev-btn" onClick={handlePrevious}>
        &#10094;
      </button>
      <button className=" next-btn" onClick={handleNext}>
        &#10095;
      </button>

      <img
        className="main-img"
        src={images[currentIndex]}
        alt="Product Image"
      />
    </div>
  );
}

export default ProductPanel;
