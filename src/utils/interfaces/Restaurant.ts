export type RestaurantType = {
  name: string;
  areaName: string;
  costForTwo: string;
  avgRating: number;
  cloudinaryImageId: string;
  link: string;
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
