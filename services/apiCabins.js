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

export async function createEditCabin(newCabin, editId) {
  // getting cabin image ready

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1- Create/Edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!editId) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  // B) Edit
  if (editId) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", editId);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error("this is console.error:", error);
    throw new Error(
      editId ? "Cabin could not be updated" : "Cabin could not be created"
    );
  }

  // 2- cabin is created/updated successfully, now we upload the image to supabase storage
  if (hasImagePath) {
    return data;
  }

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
