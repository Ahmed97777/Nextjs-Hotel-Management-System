"use client";

import React from "react";
import Filter from "../Filter";

export default function CabinTableOperations() {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </div>
  );
}
