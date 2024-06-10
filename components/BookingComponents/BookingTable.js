import React from "react";
import BookingsContent from "./BookingsContent";

function BookingTable() {
  return (
    <div
      /*Cabins Table*/
      role="table"
      className="min-w-[310px] max-w-[900px] border-2 border-solid border-gray-200 bg-white rounded-lg overflow-hidden"
    >
      <header
        role="row"
        className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] p-4 bg-gray-50 border-2 border-solid border-gray-100 text-xs sm:text-sm md:text-base font-semibold text-gray-600"
      >
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </header>

      <BookingsContent />
    </div>
  );
}

export default BookingTable;
