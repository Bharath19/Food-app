import { NRestaurantShimmerCard } from "@utils/shimmer/RestaurantShimmerCard";
import { RestaurantInfoType } from "@utils/interfaces/Restaurant";

import { RestaurantList } from "./RestaurantList";
import { LoadMoreBtn } from "./buttons/LoadMoreBtn";
import useRestaurant from "@/hooks/useRestaruent";
import { useState, useEffect } from "react";
import SearchBox from "../SearchBox";

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { restaurants, next, error, hasNext, loading } = useRestaurant();

  let filteredData = [];

  // Debounce the search term using useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // filter
  filteredData = debouncedSearchTerm
    ? restaurants?.filter((restaurant: RestaurantInfoType) => {
        const name = restaurant?.info?.name?.toLocaleLowerCase();
        return name.indexOf(debouncedSearchTerm.toLocaleLowerCase()) > -1;
      })
    : restaurants;
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="flex items-center">
        <SearchBox searchHandler={setSearchTerm} />
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-10 my-5">
        {filteredData?.length > 0 && <RestaurantList data={filteredData} next={next} hasNext={hasNext} />}
        {loading && <NRestaurantShimmerCard count={25} />}
      </div>
      {!loading && hasNext && <LoadMoreBtn onClickHandler={() => next(true)} />}
    </>
  );
};

export default Restaurant;
