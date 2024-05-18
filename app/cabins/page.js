"use client";

import CabinsContent from "@/components/CabinsComponents/CabinsContent";
import CreateCabinForm from "@/components/CabinsComponents/CreateCabinForm";
import { useState } from "react";

function Page() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-gray-600 text-2xl">All cabins</h1>
        <p>Filter / Sort</p>
      </div>

      <div
        /*Cabins Table*/
        role="table"
        className="min-w-[330px] border-2 border-solid border-gray-200 bg-white rounded-lg overflow-hidden"
      >
        <header
          role="row"
          className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr] gap-x-3 bg-gray-50 border-2 border-solid border-gray-100 text-xs sm:text-base font-semibold text-gray-600"
        >
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </header>

        <CabinsContent />
      </div>

      <button
        className="btn btn-success hover:bg-green-700 hover:text-gray-200 mb-4"
        onClick={() => setShowForm((show) => !show)}
      >
        Add new cabin
      </button>

      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Page;
