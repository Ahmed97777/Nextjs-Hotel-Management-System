import React from "react";
import { useRouter } from "next/navigation";

import Menus from "../Menus";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "@/utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

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
  const router = useRouter();

  const navigateToDetails = (bookingId) => {
    router.push(`/bookings/${bookingId}`);
  };

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
        className={`capitalize font-semibold ${statusColorBadge[statusType]} w-28`}
      >
        {status.replace("-", " ")}
      </div>

      <div className="font-medium text-green-700">
        {formatCurrency(totalPrice)}
      </div>

      <Menus.Menu>
        <Menus.Toggle id={bookingId} />

        <Menus.List id={bookingId}>
          <Menus.Button
            title="Details"
            onClick={() => navigateToDetails(bookingId)}
            // disabled={isDuplicating}
          >
            <FontAwesomeIcon className="size-2" icon={faEye} />
            <span>See details</span>
          </Menus.Button>

          {/* <Menus.Button
              title="Edit"
              onClick={() => {
                setShowEditForm((show) => !show);
              }}
            >
              <FontAwesomeIcon className="size-2" icon={faPenToSquare} />{" "}
              <span>Edit</span>
            </Menus.Button>

            <Menus.Button
              title="Delete"
              onClick={() => setIsConfirmDelete((show) => !show)}
            >
              <FontAwesomeIcon className="size-2" icon={faTrashCan} />{" "}
              <span>Delete</span>
            </Menus.Button> */}
        </Menus.List>
      </Menus.Menu>
    </div>
  );
}

export default BookingRow;
