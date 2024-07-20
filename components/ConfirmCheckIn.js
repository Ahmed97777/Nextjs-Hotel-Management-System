import React, { useState } from "react";

export default function ConfirmCheckIn({
  resourceInfo,
  onCloseModal,
  onConfirm,
  disabled,
}) {
  const [paidStatus, setPaidStatus] = useState(!resourceInfo.isPaid);

  const handleCheckboxChange = () => {
    console.log("jdsjsjsj");
    setPaidStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="min-w-80 flex flex-col gap-5">
      <h3 className="text-gray-800 text-sm sm:text-base font-bold">
        Check in booking #
        <span className="text-green-600 font-medium">
          {resourceInfo.bookingId}
        </span>
      </h3>

      {!resourceInfo.isPaid && (
        <div className="flex items-center text-gray-500 text-sm sm:text-base">
          <input
            type="checkbox"
            id="confirmPayment"
            className="mr-2"
            checked={!paidStatus}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="confirmPayment">
            Confirm that{" "}
            <span className="text-green-600 font-medium">
              {resourceInfo.guestName}
            </span>{" "}
            has paid the total amount of{" "}
            <span className="text-green-600 font-medium">
              ${resourceInfo.totalPrice}
            </span>
          </label>
        </div>
      )}

      <p className="text-gray-500 mb-5 text-sm sm:text-base">
        Are you sure you want to Check in booking #
        <span className="text-green-600 font-medium">
          {resourceInfo.bookingId}
        </span>{" "}
        ? This action cannot be undone.
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
          className="btn btn-xs sm:btn-sm btn-success hover:bg-green-700 hover:text-white"
          onClick={onConfirm}
          disabled={paidStatus || disabled}
        >
          Check in
        </button>
      </div>
    </div>
  );
}
