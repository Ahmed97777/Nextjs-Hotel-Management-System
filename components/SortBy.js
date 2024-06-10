import React from "react";
import Select from "./Select";
import { useRouter, useSearchParams } from "next/navigation";

function SortBy({ options }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(e) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", e.target.value);
    router.push(`?${params.toString()}`);
  }

  return <Select options={options} onChange={handleChange} />;
}

export default SortBy;
