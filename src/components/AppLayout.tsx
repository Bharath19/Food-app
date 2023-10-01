import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
