"use client";

import React from "react";
import SettingsForm from "./SettingsForm";
import FetchWarning from "../FetchWarning";
import { useGetSettings } from "./useGetSettings";

export default function SettingsContent() {
  const { settingsData } = useGetSettings();
  // const settingsData = {};

  if (
    typeof settingsData === "object" &&
    Object.keys(settingsData).length === 0
  ) {
    return (
      <div className="flex justify-center items-center py-3" role="row">
        No data to show at the moment
      </div>
    );
  }

  if (settingsData === "Settings data could not be loaded")
    return (
      <FetchWarning message="Warning: there have been a problem with fetching settings, please refresh the page." />
    );

  return (
    <>
      {typeof settingsData === "object" &&
      Object.keys(settingsData).length > 0 ? (
        <SettingsForm settingsData={settingsData} />
      ) : (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      )}
    </>
  );
}
