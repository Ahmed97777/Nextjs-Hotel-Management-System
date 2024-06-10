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

  const sortBy = searchParams.get("sortBy") || options?.[0].value;

  return <Select options={options} value={sortBy} onChange={handleChange} />;
}

export default SortBy;
