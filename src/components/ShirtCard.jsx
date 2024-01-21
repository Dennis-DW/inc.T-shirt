import React from "react";

const ShirtCard = ({ imgURL, changeBigShirtImage, bigShirtImg }) => {
  const handleClick = () => {
    if (bigShirtImg !== imgURL.bigShirt) {
      changeBigShirtImage(imgURL.bigShirt);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShirtImg === imgURL.bigShirt
          ? "border-green-500"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center  bg-green-200 bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shirt colletion"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShirtCard;
