import React, { useState } from "react";

export default function ConfirmCheckOut({
  bookingId,
  onCloseModal,
  onConfirm,
  disabled,
}) {
  return (
    <div className="min-w-80 flex flex-col gap-5">
      <h3 className="text-gray-800 text-sm sm:text-base font-bold">
        Check out booking #
        <span className="text-green-600 font-medium">{bookingId}</span>
      </h3>

      <p className="text-gray-500 mb-5 text-sm sm:text-base">
        Are you sure you want to Check out booking #
        <span className="text-green-600 font-medium">{bookingId}</span> ? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <button
          className="btn btn-xs sm:btn-sm btn-outline hover:bg-gray-500"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </button>

        <button
          className="btn btn-xs sm:btn-sm btn-error hover:bg-red-700 hover:text-white"
          onClick={onConfirm}
          disabled={disabled}
        >
          Check out
        </button>
      </div>
    </div>
  );
}
