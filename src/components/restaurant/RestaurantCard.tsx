import React, { ForwardedRef, forwardRef } from "react";
import { RestaurantImgURL } from "@utils/constant";
import { Restaurant } from "@utils/interfaces/Restaurant";

const RestaurantCard: React.FC<Restaurant & { observerTarget: any }> = (props) => {
  const { name, areaName, costForTwo, avgRating, cloudinaryImageId, observerTarget } = props;
  const imageURL = `${RestaurantImgURL}${cloudinaryImageId}`;
  return (
    <div ref={observerTarget}>
      <div className="relative h-[220.656px] w-[331px]">
        <div className="absolute h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <img className="img-class h-full w-full object-cover rounded-xl" src={imageURL} />
        </div>
      </div>
      <div className="font-medium w-80 overflow-auto">{name}</div>
      <div className="text-gray-600">{areaName}</div>
      <div className="text-gray-600">{costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
