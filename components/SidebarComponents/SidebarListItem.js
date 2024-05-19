"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarListItem({ linkTo, icon, name }) {
  const pathName = usePathname();
  const isLinkActive = pathName.startsWith(linkTo);

  return (
    <li title={name}>
      <Link
        href={linkTo}
        className={`flex justify-center sm:justify-normal items-center ${
          isLinkActive ? "text-green-600" : "text-gray-400"
        }  `}
      >
        <span className="sm:mr-2">
          <FontAwesomeIcon className="size-5" icon={icon} />
        </span>
        <span className="hidden sm:block">{name}</span>
      </Link>
    </li>
  );
}

export default SidebarListItem;
