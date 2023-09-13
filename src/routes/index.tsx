import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@components/AppLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <AppLayout /> }],
  },
]);
