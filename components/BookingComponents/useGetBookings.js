import { getBookings } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useGetBookings() {
  const {
    data: bookingsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookingsData, isLoading, error };
}
