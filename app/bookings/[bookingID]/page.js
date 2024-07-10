"use client";

import React from "react";
import { useParams } from "next/navigation";
import BookingDetails from "@/components/BookingComponents/BookingDetails";

function Page() {
  const { bookingID } = useParams();

  return (
    <>
      <p className=" font-bold text-gray-600 text-lg sm:text-xl md:text-2xl mb-3">
        Booking #{bookingID} Details:
      </p>

      <BookingDetails />
    </>
  );
}

export default Page;
