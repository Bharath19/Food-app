import React from "react";
import SearchBox from "./SearchBox";

export const Header = (props: { searchHandler: any; }) => {
  return (
    <div className="flex justify-between items-center mb-2 shadow-lg border-b-pink-300">
      <a href="/">
        <img
          className="w-28"
          src="https://cdn.dribbble.com/users/4987860/screenshots/15665665/media/d0f87c88099f0226fe7a217e8ebdca06.jpg"
        />
      </a>
      <div className="flex justify-between items-center">
        <SearchBox searchHandler={props.searchHandler} />
      </div>
      <div>
        <button className="mr-4">Login </button>
        <button className="mr-4">Sign up </button>
      </div>
    </div>
  );
};
