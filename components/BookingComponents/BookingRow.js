import React from "react";

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    quests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <div
      // Table Row
      role="row"
      key={bookingId}
      className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] p-4 items-center border-b border-solid border-gray-100 last:border-none"
    >
      <div className="text-xs sm:text-base font-semibold text-gray-600">
        {cabinName}
      </div>

      <div className="text-xs sm:text-base font-semibold text-gray-600">
        {guestName}
      </div>

      <div className="text-xs sm:text-base">
        {startDate} & {endDate}
      </div>

      <div className="text-xs sm:text-base font-semibold">${status}</div>

      <div className="text-xs sm:text-base font-semibold text-green-700">
        {totalPrice}
      </div>
    </div>
  );
}

export default BookingRow;
