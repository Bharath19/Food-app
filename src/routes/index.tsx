import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@components/AppLayout";
import RestaurantInfo from "@/components/restaurant/RestaurantInfo";
import Restaurant from "@/components/restaurant/Restaurant";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Restaurant /> },
      { path: "restaurant/:id", element: <RestaurantInfo /> },
    ],
  },
]);
