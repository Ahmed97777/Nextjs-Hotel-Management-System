import React from "react";

export default function FormRow({ children }) {
  return (
    <div
      /*Form Row*/ className="grid grid-cols-[1fr,1fr,1fr] items-center py-5 px-[auto] border-b-[1px] border-solid border-gray-200"
    >
      {children}
    </div>
  );
}
