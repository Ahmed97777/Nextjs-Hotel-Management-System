import supabase from "./supabase";

export async function getBookings() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), quests(fullName, email)"
      );

    if (error) {
      console.error("Bookings console.error:", error);
      throw new Error("Bookings data could not be loaded");
    }

    console.log("Bookings request succeeded");
    return data;
  } catch (error) {
    console.log("Bookings error message:", error.message);
    return error.message;
  }
}
