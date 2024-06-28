import React from "react";
import { useGetBooking } from "./useGetBooking";
import Spinner from "../Spinner";

function BookingDetails() {
  const { bookingData = {}, isLoading } = useGetBooking();
  console.log(bookingData);

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
    <div className="p-4">
      {status && (
        <div
          className={`capitalize btn-sm font-semibold ${statusColorBadge[statusType]} w-32 mb-4`}
        >
          {status.replace("-", " ")}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Guest Information</h3>
          <p>
            <strong>Name:</strong> {guestName}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Country Flag:</strong> {countryFlag}
          </p>
          <p>
            <strong>National ID:</strong> {nationalID}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Cabin Information</h3>
          <p>
            <strong>Cabin Name:</strong> {cabinName}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Booking Dates</h3>
        <p>
          <strong>Created At:</strong> {created_at}
        </p>
        <p>
          <strong>Start Date:</strong> {startDate}
        </p>
        <p>
          <strong>End Date:</strong> {endDate}
        </p>
        <p>
          <strong>Number of Nights:</strong> {numNights}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Guest Details</h3>
        <p>
          <strong>Number of Guests:</strong> {numGuests}
        </p>
        <p>
          <strong>Has Breakfast:</strong> {hasBreakfast ? "Yes" : "No"}
        </p>
        <p>
          <strong>Observations:</strong> {observations}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Payment Information</h3>
        <p>
          <strong>Cabin Price:</strong> ${cabinPrice}
        </p>
        <p>
          <strong>Extras Price:</strong> ${extrasPrice}
        </p>
        <p>
          <strong>Total Price:</strong> ${totalPrice}
        </p>
        <p>
          <strong>Is Paid:</strong> {isPaid ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default BookingDetails;
