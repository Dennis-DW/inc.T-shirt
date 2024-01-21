import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const Testimonials = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-thin text-4xl capitalize font-bold">
        what our <span className="text-coral-red"> customers</span> say?
      </h3>
      <p className="text-center m-auto mt-4 info-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet
        mauris ut blandit tempus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam aliquet mauris ut blandit tempus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam aliquet mauris ut
        blandit tempus.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"></div>
      {reviews.map((review) => (
        <ReviewCard
          key={review.imgURL}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </section>
  );
};

export default Testimonials;
