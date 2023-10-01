export type RestaurantType = {
  id: number;
  name: string;
  areaName: string;
  costForTwo: string;
  avgRating: number;
  cloudinaryImageId: string;
};

export type RestaurantInfoType = {
  info: RestaurantType;
};

export type RestaurantPropsType = {
  restaurants: RestaurantInfoType[];
  loading: boolean;
  hasNext: boolean;
  next: (manualRequest?: boolean) => void;
  error: string;
};
