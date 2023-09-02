import React from "react";
import useRestaurant from "@hooks/useRestaruent";
import { NRestaurantShimmerCard } from "@utils/shimmer/RestaurantShimmerCard";
import { RestaurantList } from "./RestaurantList";

const Restaurant = ({ restaurants, next, error, hasNext, loading}) => {

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-1 flex-wrap justify-center gap-10">
      {restaurants?.length > 0 && <RestaurantList data={restaurants} next={next} hasNext={hasNext} />}
      {loading && <NRestaurantShimmerCard count={24} />}
    </div>
  );
};

export default Restaurant;
