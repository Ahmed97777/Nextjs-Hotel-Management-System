import React from "react";
import FilterButton from "./FilterButton";
import { useRouter } from "next/navigation";

export default function Filter() {
  const router = useRouter();

  function handleClick(value) {
    const params = new URLSearchParams();
    params.set("discount", value);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="border border-gray-100 border-solid bg-white shadow-sm rounded-sm p-1 flex gap-4">
      <FilterButton onClick={() => handleClick("all")}>All</FilterButton>
      <FilterButton onClick={() => handleClick("no-discount")}>
        No-discount
      </FilterButton>
      <FilterButton onClick={() => handleClick("with-discount")}>
        With-discount
      </FilterButton>
    </div>
  );
}
