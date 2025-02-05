import { getSettings } from "@services/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({ queryFn: getSettings, queryKey: ["settings"] });

  return { isLoading, error, settings };
}
