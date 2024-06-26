"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetBooking } from "@/components/BookingComponents/useGetBooking";
import Spinner from "@/components/Spinner";

function Page() {
  const { bookingID } = useParams();

  const { bookingData = {}, isLoading } = useGetBooking();

  const { status = "" } = bookingData;

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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <p className="font-bold text-gray-600 text-lg sm:text-xl md:text-2xl mb-3">
              Booking #{bookingID} Details Page
            </p>

            {status && (
              <div
                className={`capitalize btn-sm font-semibold ${statusColorBadge[statusType]} w-32`}
              >
                {status?.replace("-", " ")}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
