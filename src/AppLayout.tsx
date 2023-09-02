import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RestaurantInfo } from "@utils/interfaces/Restaurant";
import useRestaurant from "@hooks/useRestaruent";

export const AppLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const { restaurants, next, error, hasNext, loading} = useRestaurant()!

  let filteredData = [];

  // Debounce the search term using useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // filter
  filteredData = debouncedSearchTerm
    ? restaurants?.filter((restaurant: RestaurantInfo) => {
        const name = restaurant?.info?.name?.toLocaleLowerCase();
        return name.indexOf(debouncedSearchTerm.toLocaleLowerCase()) > -1;
      })
    : restaurants;

  return (
    <>
      <Header searchHandler={setSearchTerm} />
      <main className="bg-gray-50">
        <Restaurant restaurants={filteredData} error={error} loading={loading} next={next} hasNext={hasNext}/>
      </main>
      <Footer />
    </>
  );
};

import React from "react";
import Restaurant from "./restaurant/Restaurant";

export const Content = () => {
  return (
    <main className="bg-gray-50 my-4">
      <Restaurant />
    </main>
  );
};
