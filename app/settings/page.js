"use client";

import React from "react";
import { useGetSettings } from "./useGetSettings";
import SettingsForm from "@/components/SettingsForm";
import FetchWarning from "@/components/FetchWarning";

function Page() {
  const { settingsData, isLoading } = useGetSettings();
  // console.log(settingsData);

  return (
    <>
      <div className="">
        <h1 className="font-bold text-gray-600 text-2xl">
          Update hotel settings
        </h1>
      </div>

      {typeof settingsData === "object" ? (
        <SettingsForm settingsData={settingsData} />
      ) : settingsData === "Settings data could not be loaded" ? (
        <FetchWarning message="Warning: there have been a problem with fetching settings, please refresh the page." />
      ) : (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}
    </>
  );
}

export default Page;
