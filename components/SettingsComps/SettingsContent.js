"use client";

import React from "react";
import SettingsForm from "./SettingsForm";
import FetchWarning from "../FetchWarning";
import { useGetSettings } from "./useGetSettings";

export default function SettingsContent() {
  const { settingsData } = useGetSettings();
  // console.log("Settings content:", settingsData);

  return (
    <>
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
