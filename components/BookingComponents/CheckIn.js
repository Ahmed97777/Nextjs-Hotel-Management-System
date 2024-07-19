import React from "react";

function CheckIn({ bookingId }) {
  return (
    <div className="md:inline-block">
      <label className="mr-2 text-gray-600 font-medium">Guest arrived? </label>
      <button className="btn btn-success btn-xs lg:btn-sm min-w-32 hover:bg-green-700 hover:text-gray-200">
        Check in booking #{bookingId}
      </button>
    </div>
  );
}

export default CheckIn;
