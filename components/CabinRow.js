"use client";

import { deleteCabin } from "@/services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function CabinRow({ row }) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      alert("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return (
    <div
      role="row"
      key={row.name}
      className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-x-3 items-center border-b border-solid border-gray-100 last:border-none"
    >
      <img
        src={row.image}
        alt="cabin-img"
        className="block p-1 w-9 sm:w-14 md:w-16 lg:w-20 aspect-[3/2] object-cover object-center"
      ></img>
      <div className="text-xs sm:text-base font-semibold text-gray-600">
        {row.name}
      </div>
      <div className="text-xs sm:text-base">Up to {row.maxCapacity} guests</div>
      <div className="text-xs sm:text-base font-semibold">
        $ {row.regularPrice}
      </div>
      <div className="text-xs sm:text-base font-semibold text-green-700">
        $ {row.discount}
      </div>
      <button
        onClick={() => mutate(row.id)}
        disabled={isDeleting}
        className="btn-xs btn btn-outline"
      >
        Delete
      </button>
    </div>
  );
}
