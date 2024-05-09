"use client";

import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import FetchWarning from "./FetchWarning";

export default function CabinTable() {
  const {
    data: cabinsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return (
    <>
      {Array.isArray(cabinsData) ? (
        cabinsData.map((row) => (
          <div
            role="row"
            key={row.name}
            className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-x-5 items-center md:py-3 md:px-6 lg:py-[1.6rem] lg:px-[2.4rem] border-b border-solid border-gray-100 last:border-none"
          >
            <img
              src={row.image}
              alt="cabin-img"
              className="block  md:ml-0 sm:w-14 md:w-16 lg:w-20 aspect-[3/2] object-cover object-center"
            ></img>
            <div className="sm:text-xs md:text-base  font-semibold text-gray-600">
              {row.name}
            </div>
            <div className="sm:text-xs md:text-base ">
              Up to {row.maxCapacity} guests
            </div>
            <div className="sm:text-xs font-semibold md:text-base ">
              $ {row.regularPrice}
            </div>
            <div className="sm:text-xs font-semibold md:text-base  text-green-700">
              $ {row.discount}
            </div>
            <button className="sm:text-xs md:text-base ">Delete</button>
          </div>
        ))
      ) : cabinsData === "Cabins could not be loaded" ? (
        <div role="row">
          <FetchWarning />
        </div>
      ) : (
        <div role="row" className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}
    </>
  );
}
