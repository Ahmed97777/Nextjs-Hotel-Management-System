"use client";

import React from "react";
import StyledSpan from "./StyledSpan";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";

function Pagination({ count, pageSize }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / pageSize);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", next);
    router.push(`?${params.toString()}`);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", prev);
    router.push(`?${params.toString()}`);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between">
      <p>
        Showing <StyledSpan>{(currentPage - 1) * pageSize + 1}</StyledSpan> to
        <StyledSpan>
          {" "}
          {currentPage === pageCount ? count : currentPage * pageSize}
        </StyledSpan>{" "}
        of
        <StyledSpan> {count}</StyledSpan> results
      </p>

      <div className="flex gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btn-success bg-gray-50 border-gray-200 btn-sm"
        >
          <FontAwesomeIcon className="size-3" icon={faChevronLeft} />{" "}
          <span>Previous</span>
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="btn btn-success bg-gray-50 border-gray-200 btn-sm"
        >
          <span>Next</span>{" "}
          <FontAwesomeIcon className="size-3" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
