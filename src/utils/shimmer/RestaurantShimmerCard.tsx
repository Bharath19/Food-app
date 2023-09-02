import React from "react";

export const RestaurantShimmerCard = () => {
  return (
    <div className="rounded-md ">
      <div className="h-[220.656px] w-[331px] rounded-md bg-gray-200 animate-pulse"></div>
      <div className="mt-4 h-7 w-60 rounded-md bg-gray-200 animate-pulse"></div>
      <div className="mt-4 h-7 w-60 rounded-md bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export const NRestaurantShimmerCard = ({ count = 20 }) => {
  return new Array(count).fill("").map((_, index) => <RestaurantShimmerCard key={index} />);
};
