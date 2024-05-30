import React from "react";

const FilterButton = ({ active, children, ...props }) => {
  const activeClasses = "bg-green-600 text-green-50";

  return (
    <button
      className={`border-none rounded-sm p-1 font-medium transition-all duration-300 ${
        active ? activeClasses : ""
      } hover:bg-green-600 hover:text-green-50`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilterButton;
