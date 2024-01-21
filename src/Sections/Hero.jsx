import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets1/icons";
import { shirts, statistics } from "../constants";
import { bigShirt1 } from "../assets1/images";
import ShirtCard from "../components/ShirtCard";
import { useState } from "react";

const Hero = () => {
  const [bigShirtImg, setBigShirtImg] = useState(bigShirt1);
  useState(bigShirt1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-8 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
         <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[62px] max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrivals
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">T-Shirt</span> .inc
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet mauris ut blandit tempus.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
        <img
          src={bigShirtImg}
          alt="shirt colletion"
          width={420}
          height={600}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shirts.map((shirt) => (
            <div key={shirt}>
              <ShirtCard
                index={shirt}
                imgURL={shirt}
                changeBigShirtImage={(shirt) => setBigShirtImg(shirt)}
                bigShirtImg={bigShirtImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
