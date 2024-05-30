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
import Menus from "../Menus";

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
        // Table Row
        role="row"
        key={cabinId}
        className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] items-center border-b border-solid border-gray-100 last:border-none"
      >
        <img
          src={image}
          alt="cabin-img"
          className="block p-1 w-9 sm:w-14 md:w-16 lg:w-20 aspect-[3/2] object-cover object-center"
        ></img>

        <div className="text-xs sm:text-base font-semibold text-gray-600">
          {name}
        </div>

        <div className="text-xs sm:text-base">{maxCapacity} guests</div>

        <div className="text-xs sm:text-base font-semibold">
          ${regularPrice}
        </div>

        <div className="text-xs sm:text-base font-semibold text-green-700">
          {discount ? `$${discount}` : <span>&mdash;</span>}
        </div>

        <Menus.Menu>
          <Menus.Toggle id={cabinId} />

          <Menus.List id={cabinId}>
            <Menus.Button
              title="Duplicate"
              onClick={handleDuplicate}
              disabled={isDuplicating}
            >
              <FontAwesomeIcon className="size-2" icon={faClone} />{" "}
              <span>Duplicate</span>
            </Menus.Button>

            <Menus.Button
              title="Edit"
              onClick={() => {
                setShowEditForm((show) => !show);
              }}
            >
              <FontAwesomeIcon className="size-2" icon={faPenToSquare} />{" "}
              <span>Edit</span>
            </Menus.Button>

            <Menus.Button
              title="Delete"
              onClick={() => setIsConfirmDelete((show) => !show)}
            >
              <FontAwesomeIcon className="size-2" icon={faTrashCan} />{" "}
              <span>Delete</span>
            </Menus.Button>
          </Menus.List>
        </Menus.Menu>
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
