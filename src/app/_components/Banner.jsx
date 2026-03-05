"use client"
import React from "react";

const Banner = () => {
  const handleBtn = () => {
    alert("I got clicked?!");
  };
  return (
    <div className="text-center space-y-5 bg-linear-60 to-sky-200 from-sky-400 py-8 rounded-xl">
      <h2 className="text-4xl font-bold">Welcome to Dev-Story</h2>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 rounded-lg text-white font-semibold my-3 hover:bg-sky-400 cursor-pointer duration-200"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
