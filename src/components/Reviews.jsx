import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "./Reviews.css";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [rating, setRating] = useState(0); // Initial value

  return (
    <div className="review-div">
      <h1>REVIEWS</h1>
      <Rating
        style={{ maxWidth: 100, marginLeft: 60 }}
        value={rating}
        onChange={setRating}
      />
      <p className="rateing-p">4.6</p>
      <p className="total-reviews">445 reviews</p>
    </div>
  );
};

export default Reviews;
