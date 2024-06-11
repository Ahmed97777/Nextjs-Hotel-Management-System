import React from "react";
import BookingsContent from "./BookingsContent";

function BookingTable() {
  return (
    <div
      /*Cabins Table*/
      role="table"
      className="overflow-auto min-w-[310px] max-w-[900px] border-2 border-solid border-gray-200 bg-white rounded-lg"
    >
      <header
        role="row"
        className="grid grid-cols-[1fr,2fr,2.4fr,1.4fr,1fr,3.2rem] p-2 sm:p-4 bg-gray-50 border-2 border-solid border-gray-100 text-xs sm:text-sm md:text-base font-semibold text-gray-600"
      >
        <div className="w-14">Cabin</div>
        <div className="w-28">Guest</div>
        <div className="w-28">Dates</div>
        <div className="w-28">Status</div>
        <div className="w-28">Amount</div>
        <div className="w-28"></div>
      </header>

      <BookingsContent />
    </div>
  );
}

export default BookingTable;
