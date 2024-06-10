"use client";

import React from "react";
import FetchWarning from "../FetchWarning";
import BookingRow from "./BookingRow";
import { useGetBookings } from "./useGetBookings";

function BookingsContent() {
  const { bookingsData } = useGetBookings();
  // const bookingsData = [];

  if (Array.isArray(bookingsData) && bookingsData.length === 0) {
    return (
      <div className="flex justify-center items-center py-3" role="row">
        No data to show at the moment
      </div>
    );
  }

  if (bookingsData === "Bookings data could not be loaded")
    return (
      <FetchWarning message="Warning: there have been a problem with fetching bookings, please refresh the page." />
    );

  return (
    <>
      {Array.isArray(bookingsData) && bookingsData.length > 0 ? (
        bookingsData.map((booking) => (
          <BookingRow key={booking.id} booking={booking} />
        ))
      ) : (
        <div role="row" className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}
    </>
  );
}

export default BookingsContent;
