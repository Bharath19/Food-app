import { RestaurantListURL } from "@utils/constant";

const fetchData = async (apiEndpoint: string) => {
  let cachedData = JSON.parse(localStorage.getItem(apiEndpoint));

  if (!cachedData) {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    localStorage.setItem(apiEndpoint, JSON.stringify(data));
    return data;
  }

  return cachedData;
};

export const fetchDataFromAPI = async (nextOffset) => {
  let cachedData = JSON.parse(localStorage.getItem(RestaurantListURL+nextOffset));
  if (cachedData) {
    return cachedData;
  }
  try {
    const response = await fetch(RestaurantListURL, {
      body: `{"seoParams":{"apiName":"CityPage"},"widgetOffset":{"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo":"${nextOffset}"}}`,
      method: "POST",
    });
    const json = await response.json();
    const restaurants = json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const offset = json?.data?.success?.pageOffset?.widgetOffset?.collectionV5RestaurantListWidget_SimRestoRelevance_food_seo;
    
    localStorage.setItem(RestaurantListURL+nextOffset, JSON.stringify({ restaurants, offset }));

    return { restaurants, offset };
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};