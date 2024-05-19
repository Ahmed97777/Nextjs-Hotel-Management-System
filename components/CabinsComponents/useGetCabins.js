import { getCabins } from "@/services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export function useGetCabins() {
  const {
    data: cabinsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabinsData, isLoading, error };
}
