import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import ModalForm from "../ModalForm";
import ConfirmDelete from "../ConfirmDelete";

export default function CabinRow({ cabin }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating: isDuplicating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }

  return (
    <>
      <div
        role="row"
        key={cabinId}
        className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-x-3 items-center border-b border-solid border-gray-100 last:border-none"
      >
        <img
          src={image}
          alt="cabin-img"
          className="block p-1 w-9 sm:w-14 md:w-16 lg:w-20 aspect-[3/2] object-cover object-center"
        ></img>

        <div className="text-xs sm:text-base font-semibold text-gray-600">
          {name}
        </div>

        <div className="text-xs sm:text-base">Up to {maxCapacity} guests</div>

        <div className="text-xs sm:text-base font-semibold">
          ${regularPrice}
        </div>

        <div className="text-xs sm:text-base font-semibold text-green-700">
          {discount ? `$${discount}` : <span>&mdash;</span>}
        </div>

        <div className="flex gap-1">
          <button
            onClick={handleDuplicate}
            disabled={isDuplicating}
            className="btn-xs btn btn-outline hover:bg-gray-500"
            title="Duplicate"
          >
            <FontAwesomeIcon className="size-3" icon={faClone} />
          </button>

          <button
            className="btn-xs btn btn-outline hover:bg-gray-500"
            title="Edit"
            onClick={() => {
              setShowEditForm((show) => !show);
            }}
          >
            <FontAwesomeIcon className="size-3" icon={faPenToSquare} />
          </button>

          <button
            onClick={() => setIsConfirmDelete((show) => !show)}
            title="Delete"
            className="btn-xs btn btn-outline hover:bg-gray-500"
          >
            <FontAwesomeIcon className="size-3" icon={faTrashCan} />
          </button>
        </div>
      </div>

      {isConfirmDelete && (
        <ModalForm onClose={() => setIsConfirmDelete(false)}>
          <ConfirmDelete
            resourceName={name}
            onCloseModal={() => setIsConfirmDelete(false)}
            onConfirm={() => deleteCabin(cabin.id)}
            disabled={isDeleting}
          />
        </ModalForm>
      )}

      {showEditForm && (
        <ModalForm onClose={() => setShowEditForm(false)}>
          <CreateCabinForm
            cabinToEdit={cabin}
            onCloseModal={() => setShowEditForm(false)}
          />
        </ModalForm>
      )}
    </>
  );
}
