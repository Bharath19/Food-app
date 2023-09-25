import { NRestaurantShimmerCard } from "@utils/shimmer/RestaurantShimmerCard";
import { RestaurantPropsType } from "@utils/interfaces/Restaurant";

import { RestaurantList } from "./RestaurantList";
import { LoadMoreBtn } from "./buttons/LoadMoreBtn";

const Restaurant = ({ restaurants, next, error, hasNext, loading }: RestaurantPropsType) => {
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="flex flex-1 flex-wrap justify-center gap-10 my-5">
        {restaurants?.length > 0 && <RestaurantList data={restaurants} next={next} hasNext={hasNext} />}
        {loading && <NRestaurantShimmerCard count={25} />}
      </div>
      {!loading && hasNext && <LoadMoreBtn onClickHandler={() => next(true)} />}
    </>
  );
};

export default Restaurant;
