import React from "react";
import { useOutsideClickModal } from "./HooksComps/useOutsideClickModal";

export default function ModalForm({ children, onClose }) {
  const modalRef = useOutsideClickModal(onClose);

  return (
    <div
      //overlay
      className="fixed top-0 left-0 w-full h-screen z-50 backdrop-filter backdrop-blur-sm flex items-center justify-center"
    >
      <div
        // Styled Modal
        ref={modalRef}
        className="relative flex flex-col p-4 sm:p-8 md:p-12 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg"
      >
        <button
          className="btn btn-outline btn-sm hover:bg-gray-500 absolute top-3 right-4"
          onClick={onClose}
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
