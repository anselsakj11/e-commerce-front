import "./Card.css";
function Card({ title, price, imgUrl, colors }) {
  return (
    <div className=" pb-1  w-25 d-flex flex-column">
      <img src={imgUrl} alt="" />
      <p className="first-p">{title}</p>
      <span className="price-s">${price}</span>
      <p className="second-p">{colors}</p>
    </div>
  );
}

export default Card;
