import { getCabins } from "@/services/apiCabins";
import React from "react";

async function page() {
  const cabinsData = await getCabins();

  return (
    <div>
      Cabins:
      {cabinsData &&
        cabinsData.map((row) => (
          <p key={row.name}>
            lets show the name: {row.name}, then we show the discount:{" "}
            {row.discount}
          </p>
        ))}
    </div>
  );
}

export default page;
