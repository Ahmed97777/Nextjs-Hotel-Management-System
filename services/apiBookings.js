import { PAGE_SIZE } from "@/utils/constants";
import supabase from "./supabase";

export async function getBookings({ page }) {
  try {
    let query = supabase
      .from("bookings")
      .select(
        "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), quests(fullName, email)",
        { count: "exact" }
      );

    if (page) {
      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error("Bookings console.error:", error);
      throw new Error("Bookings data could not be loaded");
    }

    console.log("Bookings request succeeded");
    return { data, count };
  } catch (error) {
    console.log("Bookings error message:", error.message);
    return error.message;
  }
}
