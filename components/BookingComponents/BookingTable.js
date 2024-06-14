import React from "react";
import BookingsContent from "./BookingsContent";
import TableFooter from "../TableFooter";
import Pagination from "../Pagination";

function BookingTable() {
  return (
    <div
      /*Cabins Table*/
      role="table"
      className="overflow-auto min-w-[500px] max-w-[900px] border-2 border-solid border-gray-200 bg-white rounded-lg"
    >
      <header
        role="row"
        className="grid grid-cols-[1fr,2fr,2.4fr,1.4fr,1fr,3.2rem] p-2 sm:p-4 bg-gray-50 border-2 border-solid border-gray-100 text-xs sm:text-sm font-semibold text-gray-600"
      >
        <div className="">Cabin</div>
        <div className="">Guest</div>
        <div className="">Dates</div>
        <div className="">Status</div>
        <div className="">Amount</div>
        <div className=""></div>
      </header>

      <BookingsContent />

      <TableFooter>
        <Pagination count={37} pageSize={10} />
      </TableFooter>
    </div>
  );
}

export default BookingTable;
