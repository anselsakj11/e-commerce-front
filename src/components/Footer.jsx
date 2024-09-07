import "./Footer.css";

function Footer() {
  return (
    <div className="Footer page">
      <div className="information-part">
        <div className="shop-tab w-25">
          <h1>SHop</h1>
          <p className="same-p">Best sellers</p>
          <p className="same-p">Suitcases</p>
          <p className="same-p">Bags</p>
          <p className="same-p">Accesories</p>
          <p className="same-p">Shop all</p>
          <p className="same-p">New arrivals</p>
          <p className="same-p">Corporate gifting </p>
          <p className="same-p">Gift Card</p>
        </div>
        <div className="about-tab">
          <h1>About</h1>
          <p className="same-p">The Away Difference</p>
          <p className="same-p">Our story</p>
          <p className="same-p">Careers</p>
          <p className="same-p">Impact</p>
          <p className="same-p">Press</p>
          <p className="same-p">Refer a freind</p>
          <p className="same-p">Our story</p>
          <p className="same-p">Sustainability</p>
        </div>
        <div className="get-help">
          <h1>Get Help</h1>
          <p className="same-p">Order tracing</p>
          <p className="same-p">Make an exchange</p>
          <p className="same-p">Make a return</p>
          <p className="same-p">Contact us</p>
        </div>
        <div className="fas-tab">
          <h1>FAS</h1>
          <p className="same-p">All FAS</p>
          <p className="same-p">Warranty & repairs</p>
          <div className="logos-part"></div>
        </div>
        <div className="sign-tab">
          <h1 className="sign-h1">Sign up for our emails</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eum ex exercitationem, natus iure modi expedita?
          </p>
          <div className="log-in">
            <input type="email" placeholder="Enter your email" />
            <button> -> </button>
          </div>
        </div>
      </div>
      <div className="lastt-part">
        <div className="leftt-side">
          <button>United States > </button>
        </div>
        <div className="rightt-side">
          <p className="diff-p">Privacy policy</p>
          <p className="diff-p">terms & Conditions</p>
          <p className="diff-p">Accessibility</p>
          <p className="diff-p">2023 JRSK,inc</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
