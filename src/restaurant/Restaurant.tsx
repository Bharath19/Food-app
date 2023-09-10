import React from "react";
import useRestaurant from "@hooks/useRestaruent";
import { NRestaurantShimmerCard } from "@utils/shimmer/RestaurantShimmerCard";
import { RestaurantList } from "./RestaurantList";

const Restaurant = ({ restaurants, next, error, hasNext, loading}) => {

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="flex flex-1 flex-wrap justify-center gap-10 my-5">
        {restaurants?.length > 0 && <RestaurantList data={restaurants} next={next} hasNext={hasNext} />}
        {loading && <NRestaurantShimmerCard count={25} />}
      </div>
      {!loading && hasNext && (
        <div className="flex-1 flex flex-row my-5 items-center justify-center">
          <hr className="border-t border-gray-300 my-3 w-full" />
          <button
            type="button"
            onClick={() => {
              next(true);
            }}
            className="border border-gray-300 px-80 py-2 rounded-lg whitespace-nowrap text-slate-500"
          >
            Load more Data
          </button>
          <hr className="border-t border-gray-300 my-3 w-full" />
        </div>
      )}
    </>
  );
};

export default Restaurant;
