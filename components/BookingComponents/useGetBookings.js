import { getBookings } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "next/navigation";

export function useGetBookings() {
  const searchParams = useSearchParams();

  // Pagination:
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: bookingsData, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings({ page }),
  });

  return { bookingsData, count, isLoading, error };
}
