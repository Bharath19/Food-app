import React from "react";
import { RestaurantImgURL } from "@utils/constant";
import { Restaurant } from "@utils/interfaces/Restaurant";

const RestaurantCard: React.FC<Restaurant> = ({ name, areaName, costForTwo, avgRating, cloudinaryImageId }) => {
  const imageURL = `${RestaurantImgURL}${cloudinaryImageId}`;
  return (
    <div className="p-4 w-72 h-96 rounded-md">
      <div>
        <img className="w-60 h-60 rounded-lg hover:rounded-none" src={imageURL} />
      </div>
      <div className="font-medium w-60 overflow-auto">{name}</div>
      <div>{areaName}</div>
      <div>{costForTwo}</div>
      <div>{avgRating}</div>
    </div>
  );
};

export default RestaurantCard;
