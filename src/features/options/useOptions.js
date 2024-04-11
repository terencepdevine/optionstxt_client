import { useQuery } from "@tanstack/react-query";
import { getOptions } from "../../services/apiOptions";

export function useOptions() {
  const {
    isLoading,
    data: options,
    error,
  } = useQuery({
    queryKey: ["options"],
    queryFn: getOptions,
  });

  return { isLoading, error, options };
}
