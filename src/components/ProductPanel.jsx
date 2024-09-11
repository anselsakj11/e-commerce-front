import "./ProductPanel.css";
import luggage2 from "../assets/luggage2.webp";

import luggage3 from "../assets/luggage3.webp";
function ProductPanel() {
  return (
    <div className="img-area">
      <img className="main-img" src={luggage3} alt="Product Image" />
    </div>
  );
}
export default ProductPanel;
