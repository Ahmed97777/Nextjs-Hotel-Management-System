import React from "react";
import StyledSpan from "./StyledSpan";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Pagination({ count }) {
  return (
    <div className="flex w-full items-center justify-between">
      <p>
        Showing <StyledSpan>1</StyledSpan> to
        <StyledSpan> 10</StyledSpan> of
        <StyledSpan> {count}</StyledSpan> results
      </p>

      <div className="flex gap-2">
        <button className="btn btn-success bg-gray-50 border-gray-200 btn-sm">
          <FontAwesomeIcon icon={faChevronLeft} /> <span>Previous</span>
        </button>

        <button className="btn btn-success bg-gray-50 border-gray-200 btn-sm">
          <span>Next</span> <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
