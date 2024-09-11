import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="span-div">
        <span className="main-span">AWAY</span>
      </div>

      <div className="part-one">
        <Link className="shop-links" to="/">
          Home
        </Link>
        <Link className="shop-links" to="/shop">
          Shop
        </Link>
        <a className="shop-links" href="http://">
          BAGS
        </a>
        <a className="shop-links" href="http://">
          ACCESORIES
        </a>
        <a className="shop-links" href="http://">
          GUIDES & COLLECTIONS
        </a>
        <a className="shop-links-special" href="http://">
          {" "}
          SALE
        </a>
      </div>
      <div className="part-two">
        <a className="shop-link" href="http://">
          LOG IN
        </a>
        <a href="Cart2.html" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
