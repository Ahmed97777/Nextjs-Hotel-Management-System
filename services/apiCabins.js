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

    console.log("Cabins request succeded");
    return cabinsData;
  } catch (error) {
    throw new Error(error.message);
  }
}
