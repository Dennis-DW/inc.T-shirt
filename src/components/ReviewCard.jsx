import React from "react";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgURL} alt={customerName} className="w-24 h-24 rounded-full" />
      <h5 className="text-xl font-semibold mt-4">{customerName}</h5>
      <div className="flex justify-center items-center gap-2 mt-2">
        <span className="text-2xl text-coral-red">{rating}</span>
        <span className="text-2xl text-coral-red">★</span>
      </div>
    
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    </div>
  );
};

export default ReviewCard;
