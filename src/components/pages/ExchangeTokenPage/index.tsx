import { useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { useApiQuery } from "../../../hooks/use-api-query";
import { exchangeTokenRoute } from "../../../routing/routes";
import { tokensUrl } from "../../../utils/url";
import { DetailedAthlete } from "../../../types/athlete";

export function ExchangeTokenPage() {
  const { state, code, scope } = useSearch({ from: exchangeTokenRoute.id });

  const { data, error, isError, isLoading, isSuccess } =
    useApiQuery<DetailedAthlete>(
      "athleteData",
      tokensUrl(code),
      {
        enabled: code !== "",
      },
      {
        method: "post",
      }
    );

  useEffect(() => {
    console.log(state, code, scope);
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(error);
  }, [data, error]);

  if (isLoading) return <div>Login in progress...</div>;

  if (error && error.message) return <div>{error.message}</div>;

  return <div>Done</div>;
}
