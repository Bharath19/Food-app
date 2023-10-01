import { RESTAURANT_LIST_URL, RESTAURANT_TYPE_KEY } from "@utils/constant";

const checkJsonData = (jsonData: any) => {
  for (let i = 0; i < jsonData?.data?.success?.cards?.length; i++) {
    if (jsonData?.data?.success?.cards[i]?.card?.card["@type"] === RESTAURANT_TYPE_KEY) {
      const data = jsonData.data.success.cards[i].card.card.gridElements?.infoWithStyle?.restaurants;
      return data || [];
    }
  }
  return [];
};

export const fetchDataFromAPI = async (nextOffset: string) => {
  const cacheKey = RESTAURANT_LIST_URL + nextOffset;
  let cachedData = JSON.parse(localStorage.getItem(cacheKey)!);
  if (cachedData) {
    return cachedData;
  }
  try {
    const response = await fetch(RESTAURANT_LIST_URL, {
      body: `{"seoParams":{"apiName":"CityPage"},"widgetOffset":{"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"${nextOffset}"}}`,
      method: "POST",
    });
    const jsonData = await response.json();

    const restaurants = checkJsonData(jsonData);
    const offset =
      jsonData?.data?.success?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;

    localStorage.setItem(cacheKey, JSON.stringify({ restaurants, offset }));

    return { restaurants, offset };
  } catch (error) {
    console.error(error);
    throw new Error("Error while fetching data");
  }
};
