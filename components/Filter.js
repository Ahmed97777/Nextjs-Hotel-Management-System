import React from "react";
import FilterButton from "./FilterButton";
import Link from "next/link";

export default function Filter() {
  return (
    <div className="border border-gray-100 border-solid bg-white shadow-sm rounded-sm p-1 flex gap-4">
      <Link href="/cabins/discount=all">
        <FilterButton>All</FilterButton>
      </Link>

      <Link href="/cabins/discount=no-discount">
        <FilterButton>No-discount</FilterButton>
      </Link>

      <Link href="/cabins/discount=with-discount">
        <FilterButton>With-discount</FilterButton>
      </Link>
    </div>
  );
}
