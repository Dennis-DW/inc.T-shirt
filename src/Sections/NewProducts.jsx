import React from "react";
import Button from "../components/Button";
import shirt8 from "../assets1/images/shirt8.png";
const NewProducts = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide
          <span className="text-coral-red "> Quality</span>
          <span className="text-coral-red "> Disgner</span> T-Shirts
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mauris ut blandit tempus.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mauris ut blandit tempus.
        </p>

        <div className="mt-11">
          <Button label="More Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shirt8}
          alt="shirt8"
          width={500}
          height={500}
          className="object-contain"
          style={{ transform: "rotate(10deg)" }}
        />
      </div>
    </section>
  );
};

export default NewProducts;
