import { useRestaruentInfo } from "@/hooks/useRestaruentInfo";
import { RESTAURANT_IMG_URL } from "@/utils/constant";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { id } = useParams();
  const jsonData = useRestaruentInfo(+id!);
  let restaurantDetails;
  let menuDetails;

  for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
    if (
      jsonData.data.cards[i]?.card?.card &&
      jsonData.data.cards[i]?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    ) {
      restaurantDetails = jsonData.data.cards[i]?.card.card?.info;
    }
    if (jsonData.data.cards[i]?.groupedCard) {
      let category = jsonData.data.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (f) =>
          f?.card?.card && f?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      menuDetails = category?.map((d) => d.card.card);
    }
  }

  const menu = menuDetails?.map((menuDetail) => (
    <div key={menuDetail.id} className="flex flex-col gap-4 pt-5">
      <hr />
      <h1 className="font-bold text-xl">{menuDetail?.title}</h1>
      <div className="flex flex-col gap-4">
        {menuDetail?.itemCards?.map((itemCard) => (
          <div key={itemCard.id} className="flex justify-between">
            <div>
              <h2>{itemCard?.card.info?.name}</h2>
              <div className="flex flex-row gap-2">
                <div className="line-through text-sm text-gray-300">
                  <span className="before:content-['\20B9']" />
                  <span>{itemCard?.card.info?.price / 100}</span>
                </div>
                <div className="text-sm">
                  <span className="before:content-['\20B9']" />
                  <span>{itemCard?.card.info?.finalPrice / 100}</span>
                </div>
              </div>
            </div>
            <div>
              <button className="border p-1 text-sm text-green-900">Add +</button>
            </div>
            {/* <p>{JSON.stringify(itemCard?.card.info)}</p> */}
          </div>
        ))}
      </div>
    </div>
  ));

  const imageURL = `${RESTAURANT_IMG_URL}${restaurantDetails?.cloudinaryImageId}`;
  return (
    <div className="flex">
      <div className="container p-5 max-w-2xl">
        <div className="relative h-96 w-full">
          <div className="absolute h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <img className="img-class h-full w-full object-cover rounded-xl" src={imageURL} />
          </div>
        </div>
        <div className="flex justify-between p-3 w-96">
          <div className="gap-4">
            <h1 className="font-bold text-xl">{restaurantDetails?.name}</h1>
            <h2 className="text-gray-600 pt-1">{restaurantDetails?.cuisines.join(", ")}</h2>
            <h2 className="text-gray-600 pt-1">{restaurantDetails?.areaName}</h2>
            <h2 className="text-gray-600 pt-1">{restaurantDetails?.city}</h2>
          </div>
          <div className="justify-end">
            <div className="border border-green-500 rounded-md p-1 flex flex-col gap-1 text-center">
              <div className="font-bold text-green-800 flex gap-1 items-center justify-center">
                <span className="before:content-['\2605']" />
                <span>{restaurantDetails?.avgRatingString}</span>
              </div>
              <hr />
              <p className="text-sm">{restaurantDetails?.totalRatingsString}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 max-w-lg">{menu}</div>
    </div>
  );
};

export default RestaurantInfo;
