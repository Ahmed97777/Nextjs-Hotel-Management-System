import React from "react";
import FormRow from "./FormRow";

export default function SettingsForm({ settingsData = {} }) {
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settingsData;

  return (
    <form className="py-[1rem] px-[4rem] max-w-[50rem] overflow-hidden text-xs sm:text-base bg-white border-2 border-solid border-gray-200 rounded-md">
      <FormRow label="Minimum nights/bookings">
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
        ></input>
      </FormRow>

      <FormRow label="Maximum nights/bookings">
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
        ></input>
      </FormRow>

      <FormRow label="Maximum guests/bookings">
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
        ></input>
      </FormRow>

      <FormRow label="Breakfast price">
        <input
          className="input input-bordered input-success input-sm min-w-48 col-start-2"
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
        ></input>
      </FormRow>
    </form>
  );
}
