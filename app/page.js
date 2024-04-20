import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const hamcada = "ddd";

  return (
    // main: contains Sidebar and Content
    <main className="flex min-h-screen bg-gray-100">
      <div className="bg-white p-5 relative" /*Sidebar*/>
        <h3 className="mb-6 font-extrabold text-lg text-center">Next-D</h3>

        <ul>
          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faChartBar} />
              </span>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faUser} />
              </span>
              <span>Profile</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faDiagramProject} />
              </span>
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faBuildingColumns} />
              </span>
              <span>Courses</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faUserGroup} />
              </span>
              <span>Friends</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faFolderOpen} />
              </span>
              <span>Files</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faGlobe} />
              </span>
              <span>Plans</span>
            </Link>
          </li>

          <li>
            <Link href={"/"} className="flex active:">
              <span>
                <FontAwesomeIcon className="size-5" icon={faGear} />
              </span>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="" /*Content*/>Content</div>
    </main>
  );
}
