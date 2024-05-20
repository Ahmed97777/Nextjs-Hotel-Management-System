"use client";
import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinShowFormButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
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
