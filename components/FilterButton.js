import { useSearchParams } from "next/navigation";
import React from "react";

const FilterButton = ({ active, children, ...props }) => {
  const activeClasses = "bg-green-600 text-green-50";

  const searchParams = useSearchParams();
  const discountFilter = searchParams.get("discount");

  const filterDiscountValue = discountFilter || "all";

  return (
    <button
      className={`text-xs sm:text-sm md:text-base border-none rounded-sm p-1 font-medium transition-all duration-300 ${
        active === filterDiscountValue ? activeClasses : ""
      } hover:bg-green-600 hover:text-green-50`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FilterButton;
