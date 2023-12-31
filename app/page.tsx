// Import necessary libraries and styles
"use client";
import React, { useState, useEffect } from "react";
import fetchData from "./action";

export default function Home() {
  const [data, setData] = useState({ message: "" });

  const fetchDataAndUpdateState = async () => {
    try {
      const response = await fetchData();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataAndUpdateState();
  }, []); // Fetch data on the initial render

  const handleFetchAgain = () => {
    fetchDataAndUpdateState();
  };

  return (
    <>
      <div className="px-4 md:px-11 py-4 md:py-11 bg-gradient-to-r from-gray-900 to-gray-800 text-center">
        <p className="text-lg text-white">
          Random dog image generator by using{" "}
          <a
            href="https://dog.ceo/dog-api/"
            target="_blank"
            className="font-semibold text-gray-400 hover:text-gray-300"
          >
            Dog API
          </a>
        </p>
      </div>
      <div className="flex items-center justify-center p-4 md:p-36 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="text-center">
          <img
            src={data.message}
            className="w-80 h-80 md:w-96 md:h-96 mx-auto transition duration-500 ease-in-out transform hover:rotate-6"
            alt=""
          />
          <button
            onClick={handleFetchAgain}
            className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 text-white bg-gray-600 rounded-full cursor-pointer hover:bg-gray-700 transform hover:scale-105 transition duration-300"
          >
            Change Image
          </button>
        </div>
      </div>
    </>
  );
}
