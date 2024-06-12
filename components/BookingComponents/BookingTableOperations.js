"use client";

import React from "react";
import Filter from "../Filter";
import SortBy from "../SortBy";

export default function CabinTableOperations() {
  return (
    <div className="flex items-center gap-3">
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked Out" },
          { value: "checked-in", label: "Checked In" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-asc", label: "Sort by date (old first)" },
          { value: "startDate-desc", label: "Sort by date (new first)" },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          { value: "totalPrice-desc", label: "Sort by amount (high first)" },
        ]}
      />
    </div>
  );
}
