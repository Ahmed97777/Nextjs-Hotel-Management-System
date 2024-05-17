import React from "react";
import FormError from "./FormError";

export default function FormRow({ children, label, error }) {
  return (
    <div className="grid grid-cols-[1fr,1fr,1fr] items-center py-5 px-[auto] border-b-[1px] border-solid border-gray-200">
      {label && (
        <label className="font-medium mr-7" htmlFor={children.props.id}>
          {label}
        </label>
      )}

      {children}

      {error && <FormError message={error} />}
    </div>
  );
}
