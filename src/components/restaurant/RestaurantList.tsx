import React, { useEffect, useRef } from "react";
import RestaurantCard from "./RestaurantCard";

export const RestaurantList = ({ data, hasNext, next }: any) => {
  const observerTarget = useRef(null);

  useEffect(() => {
    const callbackFn = (entries: IntersectionObserverEntry[]) => {
      if (entries.length === 0) return;
      const rec = entries.at(entries.length - 1);
      if (rec && rec.isIntersecting) {
        hasNext && next();
      }
    };

    const option = { threshold: [0.1] };
    const observer = new IntersectionObserver(callbackFn, option);
    observerTarget.current && observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [data]);

  const restaurants = data?.length !== 0 ? data.slice(0, data.length - 1) : null;
  const lastRestaurant: any = data?.length !== 0 ? data[data.length - 1] : null;
  return (
    <>
      {restaurants?.map((restaurant: any, index: number) => (
        <RestaurantCard key={restaurant.info.id + index} id={restaurant.info.id} {...restaurant.info} />
      ))}
      {lastRestaurant && (
        <RestaurantCard
          key={lastRestaurant.info.id}
          id={lastRestaurant.info.id}
          {...lastRestaurant.info}
          observerTarget={observerTarget}
        />
      )}
    </>
  );
};
