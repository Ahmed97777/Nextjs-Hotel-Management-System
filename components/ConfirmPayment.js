import React from "react";

function ConfirmPayment({ resourceName }) {
  return (
    <p className="text-gray-500 text-sm sm:text-base">
      Confirm payment for booking #
      <span className="text-green-600 font-medium">{resourceName}</span> first.
    </p>
  );
}

export default ConfirmPayment;
