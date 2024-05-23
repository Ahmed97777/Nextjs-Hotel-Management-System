"use client";
import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import ModalForm from "../ModalForm";

export default function CabinShowFormButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        className="btn btn-success btn-xs lg:btn-sm hover:bg-green-700 hover:text-gray-200"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new cabin
      </button>

      {isOpenModal && (
        <ModalForm onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </ModalForm>
      )}
    </>
  );
}
