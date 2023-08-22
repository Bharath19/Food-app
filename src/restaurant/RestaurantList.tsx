import React from "react";
import RestaurantCard from "./RestaurantCard";
import { NRestaurantShimmerCard } from "@utils/shimmer/RestaurantShimmerCard";

const RestaurantList = ({ restaurantData, error, loading }) => {
  if (error) {
    return <h1>Something went wrong, please try again later....................</h1>;
  }

  return (
    <div className="flex flex-wrap  mr-20 ml-20">
      {loading && <NRestaurantShimmerCard count={24} />}
      {!loading &&
        restaurantData?.map((restaurant: any) => <RestaurantCard key={restaurant.info.id} {...restaurant.info} />)}
    </div>
  );
};

export default RestaurantList;
