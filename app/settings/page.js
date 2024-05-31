import React from "react";
import SettingsContent from "@/components/SettingsComps/SettingsContent";

function page() {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
          Update hotel settings
        </h1>
      </div>

      <SettingsContent />
    </>
  );
}

export default page;
