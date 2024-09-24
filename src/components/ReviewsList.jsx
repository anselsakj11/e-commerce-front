import "./ReviewsList.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function ReviewsList(product) {
  return (
    <div className="review-list">
      <div className="decription-rew">
        <div className="left-review">
          <h1>Michaele</h1>
          <p>S S S S S</p>
          <span>01/05/2023</span>
        </div>
        <div className="right-review">
          <h1>Comments about The Bigger Carry-On Flex</h1>
          <p className="rew-text">
            Rolls easily on sidewalks, road, and the carpet in the airport. I
            would recommend getting a luggage cover because mine gone very
            scuffed with the first use.
          </p>
          <div className="ask-rew">
            <p>Was this review helpful?</p>
            <a href=" ">Flag this Review</a>
          </div>
        </div>
      </div>

      <div className="decription-rew">
        <div className="left-review">
          <h1>Michaele</h1>
          <p>S S S S S</p>
          <span>01/05/2023</span>
        </div>
        <div className="right-review">
          <h1>Comments about The Bigger Carry-On Flex</h1>
          <p className="rew-text">
            Rolls easily on sidewalks, road, and the carpet in the airport. I
            would recommend getting a luggage cover because mine gone very
            scuffed with the first use.
          </p>
          <div className="ask-rew">
            <p>Was this review helpful?</p>
            <a href=" ">Flag this Review</a>
          </div>
        </div>
      </div>

      <div className="decription-rew">
        <div className="left-review">
          <h1>Michaele</h1>
          <p>S S S S S</p>
          <span>01/05/2023</span>
        </div>
        <div className="right-review">
          <h1>Comments about The Bigger Carry-On Flex</h1>
          <p className="rew-text">
            Rolls easily on sidewalks, road, and the carpet in the airport. I
            would recommend getting a luggage cover because mine gone very
            scuffed with the first use.
          </p>
          <div className="ask-rew">
            <p>Was this review helpful?</p>
            <a href=" ">Flag this Review</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsList;
