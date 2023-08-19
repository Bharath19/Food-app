import React from "react";

export const RestaurantShimmerCard = () => {
  return (
    <div className="p-4 w-72 h-96 rounded-md ">
      <div className="w-60 h-60 rounded-md bg-gray-200 animate-pulse"></div>
      <div className="mt-4 h-7 w-60 rounded-md bg-gray-200 animate-pulse"></div>
      <div className="mt-4 h-7 w-60 rounded-md bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export const NRestaurantShimmerCard = ({ count = 20 }) => {
  return new Array(count).fill("").map((_, index) => <RestaurantShimmerCard key={index} />);
};
