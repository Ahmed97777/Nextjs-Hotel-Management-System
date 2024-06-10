import React from "react";
import FilterButton from "./FilterButton";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter({ filterField, options }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick(value) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(filterField, value);
    router.push(`?${params.toString()}`);
  }

  const currentFilter = searchParams.get(filterField) || options?.[0].value;

  return (
    <div className="border border-gray-100 border-solid bg-white shadow-sm rounded-sm sm:p-1 flex gap-1 sm:gap-4">
      {options?.map((option) => (
        <FilterButton
          key={option.value}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}
