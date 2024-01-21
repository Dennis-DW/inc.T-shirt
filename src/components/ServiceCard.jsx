import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w [350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11  rounded-full bg-coral-red flex justify-center items-center">
        <img src={imgURL} alt={label} className="w-20 h-8" />
      </div>
        <h3 className="font-palanquin-bold text-2xl mt-8 ">{label}</h3>
        <p className="mt-4 leading-normal text-gray-500 break-words text-lg">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
