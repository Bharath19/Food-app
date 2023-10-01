import { RESTAURANT_MENU_URL } from "@/utils/constant";
import { useEffect } from "react";
import useCache from "./useCache";

export const useRestaruentInfo = (restaurantId: number) => {
  const [value, setValue] = useCache(RESTAURANT_MENU_URL + restaurantId);
  const getInfo = async (restaurantId: number) => {
    try {
      const data = await fetch(RESTAURANT_MENU_URL + restaurantId);
      const jsonData = await data.json();
      setValue(jsonData);
    } catch (error) {
      console.error(error);
      throw new Error("Error while getting the data, Please try again later");
    }
  };

  useEffect(() => {
    if (!value) {
      getInfo(restaurantId);
    }
  }, [restaurantId]);

  return value;
};
