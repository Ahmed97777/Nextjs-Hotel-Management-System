"use client";

import React from "react";
import { useParams } from "next/navigation";
import BookingDetails from "@/components/BookingComponents/BookingDetails";

function Page() {
  const { bookingID } = useParams();

  return (
    <>
      <>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <p className="font-bold text-gray-600 text-lg sm:text-xl md:text-2xl mb-3">
              Booking #{bookingID} Details Page
            </p>
          </div>
        </div>

        <BookingDetails />
      </>
    </>
  );
}

export default Page;
