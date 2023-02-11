import { AxiosError } from "axios";
import { useApiQuery } from "./use-api-query";
import { AthleteDTO } from "../types/athlete";
import { tokensUrl } from "../utils/url";

type UseTokens = {
  data: AthleteDTO | undefined;
  error: AxiosError | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
};

export function useTokens(code: string): UseTokens {
  const { data, error, isError, isLoading, isSuccess } =
    useApiQuery<AthleteDTO>(
      "athleteData",
      tokensUrl(code),
      {
        enabled: code !== "",
      },
      {
        method: "post",
      }
    );

  return {
    data,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
