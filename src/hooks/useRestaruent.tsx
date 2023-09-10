import { useCallback, useEffect, useMemo, useState } from "react";
import { MAX_INFINITE_SCROLL, RestaurantListURL } from "@utils/constant";
import { fetchDataFromAPI } from "./api";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [nextOffset, setNextOffer] = useState("1");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [scrollCount, setScrollCount] = useState(0);
  const shouldInfiniteScroll = scrollCount < MAX_INFINITE_SCROLL;

  const getRestaruent = async (manualRequest = false) => {
    setLoading(true);
    try {
      if (shouldInfiniteScroll || manualRequest) {
        const { restaurants, offset } = await fetchDataFromAPI(nextOffset);
        setRestaurants((preData) => [...preData, ...restaurants]);
        setNextOffer(offset);

        setScrollCount((prevScrollCount) => prevScrollCount + 1);
      } else {
        console.log("Maximum scroll limit reached");
      }
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
  const next = useCallback(
    (manualRequest = false) => {
      console.log("Get next record");
      getRestaruent(manualRequest);
    },
    [nextOffset]
  );
  return { restaurants, loading, hasNext, next, error };
};

export default useRestaurant;
