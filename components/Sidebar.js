import React from "react";
import Link from "next/link";

import SidebarListItem from "./SidebarListItem";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="bg-white p-5 relative" /*Sidebar*/>
      <h3
        className="mb-6 text-green-800 font-extrabold text-lg text-center" /*Logo Name*/
      >
        <Link href={"/"}>Next-JP-D</Link>
      </h3>

      <ul className="space-y-6">
        <SidebarListItem linkTo="/" icon={faTableColumns} name="Dashboard" />

        <SidebarListItem linkTo="/bookings" icon={faBookOpen} name="Bookings" />

        <SidebarListItem linkTo="/cabins" icon={faHouse} name="Cabins" />

        <SidebarListItem linkTo="/users" icon={faUsers} name="Users" />

        <SidebarListItem linkTo="/settings" icon={faGear} name="Settings" />

        <SidebarListItem
          linkTo="/account"
          icon={faAddressCard}
          name="Account"
        />

        <SidebarListItem linkTo="/login" icon={faDoorOpen} name="Login" />
      </ul>
    </div>
  );
}

export default Sidebar;
