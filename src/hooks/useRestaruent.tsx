import { useEffect, useState } from "react";
import { RestaurantListURL } from "@utils/constant";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [error, setError] = useState(false);

  const getRestaruent = async () => {
    try {
      const response = await fetch(RestaurantListURL);
      const json = await response.json();
      setRestaurants(json);
    } catch (error) {
      console.log("Error in getRestaruent", error);
      setError(true);
    }
  };

  useEffect(() => {
    getRestaruent();
  }, []);

  const loading = restaurants === null && error === false;
  return { restaurants, loading, error };
};

export default useRestaurant;
