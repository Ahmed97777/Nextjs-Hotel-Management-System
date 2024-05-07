"use client";

import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function CabinTable() {
  const { data: cabinsData, error } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return (
    <div className="flex flex-col gap-6">
      {Array.isArray(cabinsData) &&
        cabinsData.map((row) => (
          <p key={row.name}>
            lets show the name: {row.name}, then we show the discount:{" "}
            {row.discount}
          </p>
        ))}
    </div>
  );
}
