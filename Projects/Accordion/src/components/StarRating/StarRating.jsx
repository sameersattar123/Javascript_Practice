import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState();
  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <>
      <div className="star-rating">
        {[...Array(stars)].map((star, index) => {
          index++;
          return (
            <FaStar
            className={index <= (hover || rating ) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseLeave={() => handleMouseLeave()}
              onMouseMove={() => handleMouseMove(index)}
              key={index}
              size={50}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
