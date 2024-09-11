import { useParams } from "react-router-dom";
import "./ProductsDetails.css";

function ProductDetails() {
  //   const { id } = useParams();
  return (
    <div className="right-side">
      <h1 className="product-title">The Carry-On Carry-one-Flex</h1>

      <div className="shipping">
        <p>Free shipping Free returns</p>
      </div>
      <p>COLOR : GREEN</p>
      <div className="colors-div">
        <div className="black-color"></div>
        <div className="green-color"></div>
        <div className="gray-color"></div>
        <div className="blue-color"></div>
      </div>
      <div className="btn-div">
        <p className="first-btn">AWY</p>

        <a className="btn-two" href="http://">
          PERSONLIZE IT
        </a>
      </div>

      <a className="add-cart">ADD TO CART</a>
      <p className="discription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia atque,
        ipsa tenetur velit dolorem esse architecto ea enim unde magni!
      </p>
    </div>
  );
}
export default ProductDetails;
