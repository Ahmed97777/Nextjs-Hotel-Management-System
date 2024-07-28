"use client";

import React, { useState } from "react";
import ModalForm from "../ModalForm";
import ConfirmDelete from "../ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import { useRouter } from "next/navigation";

function DeleteBooking({ bookingId }) {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  const { isDeleting, deleteBooking } = useDeleteBooking();

  const router = useRouter();

  function handleDelete() {
    deleteBooking(bookingId);
    setIsConfirmDelete(false);
    router.replace("/bookings");
  }

  return (
    <>
      <>
        <div className="md:inline-block">
          <label className="mr-2 text-gray-600 font-medium">
            Guest canceled?{" "}
          </label>

          <button
            className="btn btn-error btn-xs lg:btn-sm min-w-32 hover:bg-red-700 hover:text-gray-200"
            title="Delete booking"
            onClick={() => setIsConfirmDelete((show) => !show)}
          >
            Delete booking #{bookingId}
          </button>
        </div>

        {isConfirmDelete && (
          <ModalForm onClose={() => setIsConfirmDelete(false)}>
            <ConfirmDelete
              resourceName={{ cabin: "booking #", name: bookingId }}
              onCloseModal={() => setIsConfirmDelete(false)}
              onConfirm={handleDelete}
              disabled={isDeleting}
            />
          </ModalForm>
        )}
      </>
    </>
  );
}

export default DeleteBooking;
