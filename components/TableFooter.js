import React from "react";

function TableFooter({ children }) {
  if (children) {
    return <div className="bg-gray-50 flex justify-center p-4">{children}</div>;
  }
  return null;
}

export default TableFooter;
