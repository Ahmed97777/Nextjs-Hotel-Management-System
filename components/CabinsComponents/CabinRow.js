import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin } from "@/services/apiCabins";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinRow({ cabin }) {
  const queryClient = useQueryClient();

  const [showEditForm, setShowEditForm] = useState(false);

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <div
        role="row"
        key={cabin.name}
        className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-x-3 items-center border-b border-solid border-gray-100 last:border-none"
      >
        <img
          src={cabin.image}
          alt="cabin-img"
          className="block p-1 w-9 sm:w-14 md:w-16 lg:w-20 aspect-[3/2] object-cover object-center"
        ></img>

        <div className="text-xs sm:text-base font-semibold text-gray-600">
          {cabin.name}
        </div>

        <div className="text-xs sm:text-base">
          Up to {cabin.maxCapacity} guests
        </div>

        <div className="text-xs sm:text-base font-semibold">
          $ {cabin.regularPrice}
        </div>

        <div className="text-xs sm:text-base font-semibold text-green-700">
          $ {cabin.discount}
        </div>

        <div className="flex gap-1">
          <button
            className="btn-xs btn btn-outline hover:bg-gray-500"
            onClick={() => {
              setShowEditForm((show) => !show);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => mutate(cabin.id)}
            disabled={isDeleting}
            className="btn-xs btn btn-outline hover:bg-gray-500"
          >
            Delete
          </button>
        </div>
      </div>

      {showEditForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
