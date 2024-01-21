import React from "react";
import star from "../assets1/icons/star.svg";
const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] object-cover"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" className="w-6 h-6" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
