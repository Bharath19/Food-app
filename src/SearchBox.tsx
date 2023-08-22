import React, { useState } from "react";

const SearchBox = ({ searchHandler }) => {
  return (
    <>
      <span className="text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        onChange={(e) => searchHandler(e.target.value)}
        className="outline-none p-3 w-96 rounded-2xl shadow-sm bg focus:border"
        placeholder="Search for the restaurants"
      />
    </>
  );
};

export default SearchBox;
