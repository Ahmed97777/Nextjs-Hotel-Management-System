import React from "react";
import { useGetBooking } from "./useGetBooking";
import Spinner from "../Spinner";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "@/utils/helpers";
import BookingDetailCard from "./BookingDetailCard";
import CheckIn from "./CheckIn";

function BookingDetails() {
  const { bookingData = {}, isLoading } = useGetBooking();

  if (isLoading) return <Spinner />;

  const {
    created_at,
    id: bookingId,
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
      {/* Status */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <label className="font-medium text-gray-700 text-lg sm:text-xl mr-2">
            Status:
          </label>

          {status && (
            <div
              className={`capitalize btn-xs lg:btn-sm font-semibold ${statusColorBadge[statusType]} w-32 mb-4`}
            >
              {status.replace("-", " ")}
            </div>
          )}
        </div>

        {/* if status is unconfirmed, booking is Paid, and the guest arrived, employer can check in the guest. */}
        {status === "unconfirmed" && (
          <CheckIn bookingInfo={{ bookingId, isPaid, guestName, totalPrice }} />
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 text-gray-600 text-base sm:text-lg">
        <BookingDetailCard cardName="Guest Information">
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
        </BookingDetailCard>

        <BookingDetailCard cardName="Cabin & Booking Dates">
          <p>
            <span className="font-semibold">Cabin Name:</span> {cabinName}
          </p>

          <p>
            <span className="font-semibold">Booking Date:</span>{" "}
            {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>

          <p>
            <span className="font-semibold">From </span>{" "}
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ) <span className="font-semibold">To </span>{" "}
            {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>

          <p>
            <span className="font-semibold">Total Nights:</span> {numNights}
          </p>
        </BookingDetailCard>

        <BookingDetailCard cardName="Guest Details">
          <p>
            <span className="font-semibold">Guest Plus:</span>{" "}
            {numGuests > 1 ? `+${numGuests - 1} guests` : ""}
          </p>

          <p>
            <span className="font-semibold">Include Breakfast:</span>{" "}
            {hasBreakfast ? "Yes" : "No"}
          </p>

          <p>
            <span className="font-semibold">Observations:</span> {observations}
          </p>
        </BookingDetailCard>

        <BookingDetailCard cardName="Payment Information">
          <span>
            <span className="font-semibold">Total Price:</span>{" "}
            {formatCurrency(totalPrice)}{" "}
            {Number(extrasPrice) > 0 && (
              <>
                ({formatCurrency(cabinPrice)} cabin +{" "}
                {formatCurrency(extrasPrice)} breakfast)
              </>
            )}
          </span>

          <p>
            <span className="font-semibold">Payment Status:</span>{" "}
            {isPaid ? (
              <span className="badge badge-success">Paid</span>
            ) : (
              <span className="badge badge-warning">Will pay at property</span>
            )}
          </p>
        </BookingDetailCard>
      </div>
    </>
  );
}

export default BookingDetails;
