import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import RestaurantList from "./restaurant/RestaurantList";
import useRestaurant from "@hooks/useRestaruent";
import { RestaurantInfo } from "@utils/interfaces/Restaurant";

export const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { restaurants, error, loading } = useRestaurant();

  const restaurantData: [] = restaurants?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  let filteredData = [];

  // Debounce the search term using useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // filter
  filteredData = debouncedSearchTerm
    ? restaurantData?.filter((restaurant: RestaurantInfo) => {
        const name = restaurant?.info?.name?.toLocaleLowerCase();
        return name.indexOf(debouncedSearchTerm.toLocaleLowerCase()) > -1;
      })
    : restaurantData;

  return (
    <>
      <Header searchHandler={setSearchTerm} />
      <main className="bg-gray-50">
        <RestaurantList restaurantData={filteredData} error={error} loading={loading} />
      </main>
      <Footer />
    </>
  );
};
