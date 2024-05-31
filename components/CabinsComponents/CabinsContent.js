"use client";

import React from "react";
import FetchWarning from "../FetchWarning";
import CabinRow from "./CabinRow";
import { useGetCabins } from "./useGetCabins";
import { useSearchParams } from "next/navigation";

export default function CabinsContent() {
  const { cabinsData } = useGetCabins();
  const searchParams = useSearchParams();
  const discountFilter = searchParams.get("discount");
  console.log(discountFilter);

  return (
    <>
      {Array.isArray(cabinsData) ? (
        cabinsData.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)
      ) : cabinsData === "Cabins could not be loaded" ? (
        <div role="row">
          <FetchWarning message="Warning: there have been a problem with fetching cabins, please refresh the page." />
        </div>
      ) : (
        <div role="row" className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}
    </>
  );
}
