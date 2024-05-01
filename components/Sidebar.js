import React from "react";
import Link from "next/link";

import SidebarListItem from "./SidebarListItem";

import {
  faHouse,
  faUsers,
  faTableColumns,
  faBookOpen,
  faGear,
  faAddressCard,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const sidebarData = [
    { linkTo: "/dashboard", icon: faTableColumns, name: "Dashboard" },
    { linkTo: "/bookings", icon: faBookOpen, name: "Bookings" },
    { linkTo: "/cabins", icon: faHouse, name: "Cabins" },
    { linkTo: "/users", icon: faUsers, name: "Users" },
    { linkTo: "/settings", icon: faGear, name: "Settings" },
    { linkTo: "/account", icon: faAddressCard, name: "Account" },
    { linkTo: "/login", icon: faDoorOpen, name: "Login" },
  ];

  return (
    <div className="bg-white row-span-full p-5 relative" /*Sidebar*/>
      <h3
        className="mb-6 text-green-800 font-extrabold text-sm sm:text-lg text-center" /*Logo Name*/
      >
        <Link href={"/dashboard"}>Next Hotel</Link>
      </h3>

      <ul className="space-y-7">
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
