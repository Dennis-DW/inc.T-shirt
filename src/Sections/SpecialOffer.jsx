import React from "react";
import offer from "../assets1/images/offer.png";
import Button from "../components/Button";
import { arrowRight } from "../assets1/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xg:flex-col-reverse gap-10 w-full max-container">
      <div className="flex flex-1">
        <img src={offer} width={600} height={600} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special</span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mauris ut blandit tempus. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mauris ut blandit tempus. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-green-100"
            bolderColor="text-coral-red"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
