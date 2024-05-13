"use client";
import React, { useState } from "react";

export default function CreateCabinForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm((show) => !show)}>
        Add new cabin
      </button>

      {showForm && (
        <form className="py-[2.4rem] px-[4rem] w-[40rem] overflow-hidden text-base bg-cyan-200 border-[1px] border-solid border-gray-100 rounded-md">
          Form
        </form>
      )}
    </div>
  );
}
