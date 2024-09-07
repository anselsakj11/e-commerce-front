import Footer from "../components/Footer";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";
import main from "../assets/main.webp";
import second from "../assets/second.webp";
import retail from "../assets/retail.webp";
import "./Home.css";

function Home(params) {
  return (
    <div className="shop-area">
      <div className="Navbar-area m-2">
        <Navbar></Navbar>
      </div>
      <div className="main-area d-flex">
        <div className="left-part">
          <img className="main-img" src={main} alt="" />
        </div>
        <div className="right-part">
          <h1 className="title-h">SUITCASES FOR EVERY TRAVELER</h1>
          <p className="only-p">
            Classic, Flex, Aluminum, and now Softside—suitcases to fit every
            travel style
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </div>

      {/* Favourites */}
      <Favourites></Favourites>
      {/* Footer */}
      <div className="second-part">
        <div className="left-part">
          <img className="second-img" src={second} alt="" />
        </div>
        <div className="right-side">
          <p>THE WEIGHT IS OVER</p>
          <h1>Meet Featherlight</h1>

          <p>
            Airy, organized, and exceptionally good looking. A big lift for a
            light bag.
          </p>
          <button>Shop Now - </button>
        </div>
      </div>
      <div className="third-part">
        <div className="first-d ">
          {" "}
          <p className="big-p">What fellow travelers are saying</p>
        </div>
        <div className="first-d">
          <p className="same-prg">
            {" "}
            I love Away! From the thoughtfully created products to the customer
            service team that seems to go above and beyond, everything is
            exactly how I’d want it to be. Shanna C.
          </p>
        </div>
        <div className="first-d">
          <p className="same-prg">
            {" "}
            I’ve taken my [luggage] to Paris, San Francisco, New Mexico,
            Indonesia... I have never traveled more at ease. If there was a
            rating higher than 10, I’d give it. Alexander F.
          </p>
        </div>
        <div className="first-d">
          <p className="same-prg">
            {" "}
            The best brand in my collection and always my first choice when
            travelling. William R.
          </p>
        </div>
      </div>

      <div className="retail-div">
        <div className="retail-text">
          <button className="pick-store"> Pick your store</button>
          <h1 className="retail-h"> Away IRL</h1>
          <p>Come visit us and get Away IRL!</p>
          <button className="categories-btn"> SEE ALL STORES - </button>
        </div>
        <div className="retail img">
          <img className="second-img" src={retail} alt="" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
export default Home;
