import { useQuery } from "@tanstack/react-query";
import { getBooking } from "@/services/apiBookings";
import { useParams } from "next/navigation";

export function useGetBooking() {
  const { bookingID } = useParams();

  const {
    data: bookingData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingID],
    queryFn: () => getBooking(bookingID),
  });

  return { bookingData, isLoading, error };
}
