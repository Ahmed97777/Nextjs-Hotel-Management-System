import React from "react";
import { useGetBooking } from "./useGetBooking";
import Spinner from "../Spinner";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "@/utils/helpers";

function BookingDetails() {
  const { bookingData = {}, isLoading } = useGetBooking();

  if (isLoading) return <Spinner />;

  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    status,
    hasBreakfast,
    observations,
    isPaid,
    quests: { fullName: guestName, email, countryFlag, nationalID } = {},
    cabins: { name: cabinName } = {},
  } = bookingData;

  // status design config:
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
  // end status

  return (
    <>
      <div>
        <span className="font-medium text-gray-700 text-lg sm:text-xl mr-2">
          Booking Status:
        </span>
        {status && (
          <div
            className={`capitalize btn-sm font-semibold ${statusColorBadge[statusType]} w-32 mb-4`}
          >
            {status.replace("-", " ")}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 text-gray-600 text-base sm:text-lg">
        <div className="bg-white p-4 shadow-md rounded flex flex-col gap-2 min-w-64 transform transition-transform duration-300 hover:translate-y-3 hover:shadow-lg">
          <h3 className="text-green-700 font-bold text-center">
            Guest Information
          </h3>

          <p>
            <span className="font-semibold">Name:</span> {guestName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {countryFlag}
          </p>
          <p>
            <span className="font-semibold">National ID:</span> {nationalID}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded flex flex-col gap-2 min-w-64 transform transition-transform duration-300 hover:translate-y-3 hover:shadow-lg">
          <h3 className="text-green-700 font-bold text-center">
            Cabin & Booking Dates
          </h3>

          <p>
            <span className="font-semibold">Cabin Name:</span> {cabinName}
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>
          <p>
            <span className="font-semibold">Number of Nights:</span> {numNights}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded flex flex-col gap-2 min-w-64 transform transition-transform duration-300 hover:translate-y-3 hover:shadow-lg">
          <h3 className="text-green-700 font-bold text-center">
            Guest Details
          </h3>

          <p>
            <span className="font-semibold">Number of Guests:</span> {numGuests}
          </p>
          <p>
            <span className="font-semibold">Has Breakfast:</span>{" "}
            {hasBreakfast ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-semibold">Observations:</span> {observations}
          </p>
        </div>

        <div className="bg-white p-4 shadow-md rounded flex flex-col gap-2 min-w-64 transform transition-transform duration-300 hover:translate-y-3 hover:shadow-lg">
          <h3 className="text-green-700 font-bold text-center">
            Payment Information
          </h3>

          <p>
            <span className="font-semibold">Cabin Price:</span>{" "}
            {formatCurrency(cabinPrice)}
          </p>
          <p>
            <span className="font-semibold">Extras Price:</span>{" "}
            {formatCurrency(extrasPrice)}
          </p>
          <p>
            <span className="font-semibold">Total Price:</span>{" "}
            {formatCurrency(totalPrice)}
          </p>
          <p>
            <span className="font-semibold">Is Paid:</span>{" "}
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </div>
    </>
  );
}

export default BookingDetails;
