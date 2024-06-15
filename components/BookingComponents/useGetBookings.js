import { getBookings } from "@/services/apiBookings";
import { PAGE_SIZE } from "@/utils/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useSearchParams } from "next/navigation";

export function useGetBookings() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  // PAGINATION:
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    data: { data: bookingsData, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", page],
    queryFn: () => getBookings({ page }),
  });

  // PRE-FETCHING
  // 1) NEXT PAGE
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page + 1],
      queryFn: () => getBookings({ page: page + 1 }),
    });
  }

  // 2) PREV PAGE
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", page - 1],
      queryFn: () => getBookings({ page: page - 1 }),
    });
  }

  return { bookingsData, count, isLoading, error };
}
