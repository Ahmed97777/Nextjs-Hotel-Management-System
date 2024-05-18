import React from "react";

import FetchWarning from "../FetchWarning";
import CabinRow from "./CabinRow";

import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export default function CabinsContent() {
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
        cabinsData.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)
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
