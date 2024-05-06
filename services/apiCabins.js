import supabase from "./supabase";

export async function getCabins() {
  try {
    const { data: cabinsData, error } = await supabase
      .from("cabinjjs")
      .select("*");

    if (error) {
      console.error("this is console.error:", error);
      throw new Error("Cabins could not be loaded");
    }

    console.log("Cabins request succeeded");
    return cabinsData;
  } catch (error) {
    console.log("this is the error message:", error.message);
    return error.message;
  }
}
