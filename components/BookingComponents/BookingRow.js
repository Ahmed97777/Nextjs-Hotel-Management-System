import { formatCurrency, formatDistanceFromNow } from "@/utils/helpers";
import { format, isToday } from "date-fns";
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
    "checked-out": "gray",
  };

  const statusType = statusToTagName[status];

  const statusColorBadge = {
    blue: `badge badge-info`,
    green: `badge badge-success`,
    gray: `badge badge-warning bg-gray-400`,
  };

  return (
    <div
      // Table Row
      role="row"
      key={bookingId}
      className="grid grid-cols-[1fr,2fr,2.4fr,1.4fr,1fr,3.2rem] text-xs sm:text-sm p-2 sm:p-4 items-center border-b border-solid border-gray-100 last:border-none"
    >
      <div className="font-semibold text-gray-600">{cabinName}</div>

      <div className="flex flex-col gap-1">
        <span className="text-gray-600 font-medium">{guestName}</span>

        <span className="text-gray-500">{email}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-gray-600 font-medium">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>

        <span className="text-gray-500">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      <div
        className={`capitalize font-semibold ${statusColorBadge[statusType]}`}
      >
        {status.replace("-", " ")}
      </div>

      <div className="font-medium text-green-700">
        {formatCurrency(totalPrice)}
      </div>
    </div>
  );
}

export default BookingRow;
