import React from "react";

function BookingDetailCard({ children, cardName }) {
  return (
    <div className="bg-white p-4 shadow-md rounded flex flex-col gap-2 min-w-64 transform transition-transform duration-300 hover:translate-y-1 hover:shadow-lg">
      <h3 className="text-green-700 font-bold text-center">{cardName}</h3>
      {children}
    </div>
  );
}

export default BookingDetailCard;
