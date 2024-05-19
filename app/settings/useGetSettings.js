import { getSettings } from "@/services/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useGetSettings() {
  const {
    isLoading,
    data: settingsData,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settingsData, isLoading, error };
}
