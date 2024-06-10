"use client";

import React from "react";
import FetchWarning from "../FetchWarning";
import CabinRow from "./CabinRow";
import { useGetCabins } from "./useGetCabins";
import { useSearchParams } from "next/navigation";

export default function CabinsContent() {
  const { cabinsData } = useGetCabins();
  const searchParams = useSearchParams();

  // 1) Filter:
  const filterDiscountValue = searchParams.get("discount") || "all";
  console.log(filterDiscountValue);
  let filteredCabins;
  if (filterDiscountValue === "all") filteredCabins = cabinsData;
  if (filterDiscountValue === "no-discount")
    filteredCabins = cabinsData?.filter((cabin) => cabin.discount === 0);
  if (filterDiscountValue === "with-discount")
    filteredCabins = cabinsData?.filter((cabin) => cabin.discount > 0);

  // 2) Sort after filter:
  const sortByValue = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortByValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <>
      {Array.isArray(cabinsData) ? (
        sortedCabins.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)
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
