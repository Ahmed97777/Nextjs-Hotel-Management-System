"use client";

import React, { useState } from "react";
import ModalForm from "../ModalForm";
import ConfirmCheckIn from "../ConfirmCheckIn";

function CheckIn({ bookingInfo }) {
  const [isConfirmCheckIn, setIsConfirmCheckIn] = useState(false);

  return (
    <>
      <div className="md:inline-block">
        <label className="mr-2 text-gray-600 font-medium">
          Guest arrived?{" "}
        </label>

        <button
          className="btn btn-success btn-xs lg:btn-sm min-w-32 hover:bg-green-700 hover:text-gray-200"
          title="Check In"
          onClick={() => setIsConfirmCheckIn((show) => !show)}
        >
          Check in booking #{bookingInfo.bookingId}
        </button>
      </div>

      {isConfirmCheckIn && (
        <ModalForm onClose={() => setIsConfirmCheckIn(false)}>
          <ConfirmCheckIn
            resourceInfo={bookingInfo}
            onCloseModal={() => setIsConfirmCheckIn(false)}
            // onConfirm={() => deleteCabin(cabin.id)}
            // disabled={isDeleting}
          />
        </ModalForm>
      )}
    </>
  );
}

export default CheckIn;
