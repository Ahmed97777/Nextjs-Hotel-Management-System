import React from "react";

export default function FormError({ message }) {
  return (
    <span className="text-xs sm:text-base font-medium text-red-700 ml-4">
      {message}
    </span>
  );
}
