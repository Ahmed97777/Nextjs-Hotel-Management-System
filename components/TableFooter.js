import React from "react";

function TableFooter({ children }) {
  if (!children) {
    return null;
  }
  return <div className="bg-gray-50 flex justify-center p-4">{children}</div>;
}

export default TableFooter;
