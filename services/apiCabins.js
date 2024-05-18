import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  try {
    const { data: cabinsData, error } = await supabase
      .from("cabins")
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

export async function createCabin(newCabin) {
  // getting cabin image ready
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1- insert the new cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error("this is console.error:", error);
    throw new Error("Cabin could not be created");
  }

  // 2- cabin is created successfully, now we upload the image to supabase storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error("uploading image console.error:", storageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error("this is console.error:", error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
