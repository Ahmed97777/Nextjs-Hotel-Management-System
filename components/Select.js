import React from "react";

function Select({ options, value }) {
  return (
    <select
      value={value}
      className="text-xs sm:text-sm py-[0.8rem] px-[1.2rem] border border-solid border-gray-100 rounded-sm bg-white font-medium shadow-sm"
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
