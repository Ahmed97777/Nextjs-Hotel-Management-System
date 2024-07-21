"use client";

import React, { useState } from "react";
import ModalForm from "../ModalForm";
import ConfirmCheckOut from "../ConfirmCheckOut";
import { useCheckingOut } from "./useCheckout";

function CheckOut({ bookingId }) {
  const [isConfirmCheckout, setIsConfirmChecout] = useState(false);

  const { checkout, isCheckingOut } = useCheckingOut();

  function handleCheckout() {
    checkout(bookingId);
    setIsConfirmChecout(false);
  }

  return (
    <>
      <div className="md:inline-block">
        <label className="mr-2 text-gray-600 font-medium">
          Guest leaving?{" "}
        </label>

        <button
          className="btn btn-error btn-xs lg:btn-sm min-w-32 hover:bg-red-700 hover:text-gray-200"
          title="Check out"
          onClick={() => setIsConfirmChecout((show) => !show)}
        >
          Check out booking #{bookingId}
        </button>
      </div>

      {isConfirmCheckout && (
        <ModalForm onClose={() => setIsConfirmChecout(false)}>
          <ConfirmCheckOut
            bookingId={bookingId}
            onCloseModal={() => setIsConfirmChecout(false)}
            onConfirm={handleCheckout}
            disabled={isCheckingOut}
          />
        </ModalForm>
      )}
    </>
  );
}

export default CheckOut;
