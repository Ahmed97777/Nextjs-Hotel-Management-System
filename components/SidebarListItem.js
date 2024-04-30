import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SidebarListItem({ linkTo, icon, name }) {
  return (
    <li className="border-b border-gray-300 pb-2">
      <Link
        href={linkTo}
        className="flex justify-center sm:justify-normal items-center text-gray-400 focus:text-green-600"
      >
        <span className="mr-2">
          <FontAwesomeIcon className="size-5" icon={icon} />
        </span>
        <span className="hidden sm:block">{name}</span>
      </Link>
    </li>
  );
}

export default SidebarListItem;
