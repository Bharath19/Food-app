import React from "react";
import { RESTAURANT_IMG_URL } from "@utils/constant";
import { RestaurantType } from "@utils/interfaces/Restaurant";
import { Link } from "react-router-dom";

const RestaurantCard: React.FC<RestaurantType & { observerTarget: any }> = (props) => {
  const { name, areaName, costForTwo, cloudinaryImageId, observerTarget, link } = props;
  const imageURL = `${RESTAURANT_IMG_URL}${cloudinaryImageId}`;
  return (
    <Link to={link}>
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
    </Link>
  );
};

export default RestaurantCard;
