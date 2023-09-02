import { useCallback, useEffect, useMemo, useState } from "react";
import { RestaurantListURL } from "@utils/constant";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [nextOffset, setNextOffer] = useState("1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getRestaruent = async () => {
    setLoading(true);
    try {
      const response = await fetch(RestaurantListURL, {
        body: `{"seoParams":{"apiName":"CityPage"},"widgetOffset":{"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"${nextOffset}"}}`,
        method: "POST",
      });
      const json = await response.json();
      const restaurants = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const offset =
        json?.data?.success?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;
      setRestaurants((preData) => [...preData, ...restaurants]);
      setNextOffer(offset);
    } catch (error) {
      setError("Error while getting the Restaruent, Please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaruent();
  }, []);

  const hasNext = !!nextOffset;
  const next = useCallback(() => {
    console.log("Get next record");
    getRestaruent();
  }, [nextOffset]);
  return { restaurants, loading, hasNext, next, error };
};

export default useRestaurant;
