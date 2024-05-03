import supabase from "./supabase";

export async function getCabins() {
  try {
    const { data: cabinsData, error } = await supabase
      .from("cabins")
      .select("*");

    if (error) {
      console.error(error);
      throw new Error("Cabins could not be loaded");
    }

    console.log("Cabins request succeeded");
    return cabinsData;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
