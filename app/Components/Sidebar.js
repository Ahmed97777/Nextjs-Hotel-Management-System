import React from "react";
import SidebarListItem from "./SidebarListItem";

import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="bg-white p-5 relative" /*Sidebar*/>
      <h3
        className="mb-6 text-green-800 font-extrabold text-lg text-center" /*Logo Name*/
      >
        Next-JP-D
      </h3>

      <ul className="space-y-6">
        <SidebarListItem linkTo="/" icon={faChartBar} name="JP-D" />

        <SidebarListItem linkTo="/pages/profile" icon={faUser} name="Profile" />

        <SidebarListItem
          linkTo="/pages/projects"
          icon={faDiagramProject}
          name="Projects"
        />

        <SidebarListItem
          linkTo="/pages/certificates"
          icon={faBuildingColumns}
          name="Certificates"
        />
      </ul>
    </div>
  );
}

export default Sidebar;
