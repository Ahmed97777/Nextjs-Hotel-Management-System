"use client";
import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import ModalForm from "../ModalForm";

export default function CabinShowFormButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        className="btn btn-success hover:bg-green-700 hover:text-gray-200 mb-4"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new cabin
      </button>

      {isOpenModal && (
        <ModalForm onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm />
        </ModalForm>
      )}
    </>
  );
}
