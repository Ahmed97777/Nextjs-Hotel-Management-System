import supabase from "./supabase";

export async function getSettings() {
  try {
    const { data, error } = await supabase
      .from("settings")
      .select("*")
      .single();

    if (error) {
      console.error("Settings console.error:", error);
      throw new Error("Settings data could not be loaded");
    }

    console.log("Settings request succeeded");
    return data;
  } catch (error) {
    console.log("Settings error message:", error.message);
    return error.message;
  }
}

export async function updateSettings(newSettings) {
  // Note: settings only contain one row

  try {
    const { data, error } = await supabase
      .from("settings")
      .update(newSettings)
      .eq("id", 1)
      .single();

    if (error) {
      console.error("Update settings console.error:", error);
      throw new Error("Update settings failed");
    }

    console.log("Update settings request succeeded");
    return data;
  } catch (error) {
    console.log("Update settings error message:", error.message);
    return error.message;
  }
}
