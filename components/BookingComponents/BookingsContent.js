"use client";

import React from "react";
import FetchWarning from "../FetchWarning";
import BookingRow from "./BookingRow";
import { useGetBookings } from "./useGetBookings";
import { useSearchParams } from "next/navigation";

function BookingsContent() {
  const searchParams = useSearchParams();
  const { bookingsData } = useGetBookings();
  console.log("this is bookings data:", bookingsData);

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

  // 1) Filter:
  const filterStatusValue = searchParams.get("status") || "all";
  console.log(filterStatusValue);
  let filteredBookings;
  if (filterStatusValue === "all") filteredBookings = bookingsData;
  if (filterStatusValue === "checked-out")
    filteredBookings = bookingsData?.filter(
      (booking) => booking.status === "checked-out"
    );
  if (filterStatusValue === "checked-in")
    filteredBookings = bookingsData?.filter(
      (booking) => booking.status === "checked-in"
    );
  if (filterStatusValue === "unconfirmed")
    filteredBookings = bookingsData?.filter(
      (booking) => booking.status === "unconfirmed"
    );

  // Function to parse and compare dates
  const compareDates = (date1, date2) => {
    return new Date(date1) - new Date(date2);
  };

  // 2) Sort after filter:
  const sortByValue = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedBookings = filteredBookings?.sort((a, b) => {
    if (field === "startDate") {
      // Parse and compare dates
      return compareDates(a[field], b[field]) * modifier;
    } else {
      // Numeric comparison for totalPrice
      return (a[field] - b[field]) * modifier;
    }
  });

  if (sortedBookings?.length === 0) {
    return (
      <div className="flex justify-center items-center py-3" role="row">
        No data to show at the moment
      </div>
    );
  }

  return (
    <>
      {Array.isArray(bookingsData) && bookingsData.length > 0 ? (
        sortedBookings?.map((booking) => (
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
