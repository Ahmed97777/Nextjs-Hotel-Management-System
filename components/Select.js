import React from "react";

function Select({ options, value, onChange }) {
  return (
    <select
      onChange={onChange}
      value={value}
      className="text-xs sm:text-sm py-3 px-5 border border-solid border-gray-100 rounded-sm bg-white font-semibold text-gray-700 shadow-sm"
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
