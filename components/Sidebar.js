import React from "react";

import SidebarListItem from "./SidebarListItem";

import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="bg-white p-5 relative" /*Sidebar*/>
      <h3
        className="mb-6 text-green-800 font-extrabold text-lg text-center" /*Logo Name*/
      >
        <Link href={"/"}>Next-JP-D</Link>
      </h3>

      <ul className="space-y-6">
        <SidebarListItem linkTo="/" icon={faChartBar} name="Dashboard" />

        <SidebarListItem linkTo="/profile" icon={faUser} name="Profile" />

        <SidebarListItem
          linkTo="/projects"
          icon={faDiagramProject}
          name="Projects"
        />

        <SidebarListItem
          linkTo="/certificates"
          icon={faBuildingColumns}
          name="Certificates"
        />
      </ul>
    </div>
  );
}

export default Sidebar;
