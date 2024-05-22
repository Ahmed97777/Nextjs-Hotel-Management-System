import { useEffect, useRef } from "react";

export function useOutsideClickModal(onClose) {
  const modalRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          console.log("Click Happened Outside Modal Window");
          onClose();
        }
      }

      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    },
    [onClose]
  );

  return modalRef;
}
