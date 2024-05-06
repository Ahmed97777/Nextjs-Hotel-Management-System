import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarListItem from "./SidebarListItem";

import {
  faHouse,
  faHotel,
  faUsers,
  faTableColumns,
  faBookOpen,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const sidebarData = [
    { linkTo: "/dashboard", icon: faTableColumns, name: "Home" },
    { linkTo: "/bookings", icon: faBookOpen, name: "Bookings" },
    { linkTo: "/cabins", icon: faHouse, name: "Cabins" },
    { linkTo: "/users", icon: faUsers, name: "Users" },
    { linkTo: "/settings", icon: faGear, name: "Settings" },
  ];

  //  {icons for Account and Login: faAddressCard, faDoorOpen,}
  //  { linkTo: "/account", icon: faAddressCard, name: "Account" },
  //  { linkTo: "/login", icon: faDoorOpen, name: "Login" },

  return (
    <div
      className="bg-white row-span-full p-5 relative border-r-2 border-gray-100 border-solid" /*Sidebar*/
    >
      <Link className="" href={"/dashboard"}>
        <div className="flex mb-2 text-green-700 justify-center" /*Logo Icon*/>
          <FontAwesomeIcon className="size-7" icon={faHotel} />
        </div>

        <h3
          className="mb-10 text-green-800 font-extrabold text-base sm:text-xl text-center" /*Logo Name*/
        >
          Next Hotel
        </h3>
      </Link>

      <ul className="space-y-10 py-5 px-1">
        {sidebarData.map((itemData) => (
          <SidebarListItem
            key={itemData.name}
            linkTo={itemData.linkTo}
            icon={itemData.icon}
            name={itemData.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
