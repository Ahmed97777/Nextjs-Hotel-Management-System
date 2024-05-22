import React from "react";

export default function ModalForm({ children, onClose }) {
  return (
    <div
      //overlay
      className="fixed top-0 left-0 w-full h-screen z-50 backdrop-filter backdrop-blur-sm"
    >
      <div
        // Styled Modal
        className="flex flex-col p-12 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg"
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
