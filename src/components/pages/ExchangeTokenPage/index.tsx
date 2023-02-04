import { useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { exchangeTokenRoute } from "../../../routing/routes";
import { tokensUrl } from "../../../utils/url";

export function ExchangeTokenPage() {
  const { state, code, scope } = useSearch({ from: exchangeTokenRoute.id });

  const { isLoading, error, data } = useQuery(
    "athleteData",
    () =>
      fetch(tokensUrl(code), {
        method: "POST",
      }).then((res) => res.json()),
    {
      enabled: code !== "",
    }
  );

  useEffect(() => {
    console.log(state, code, scope);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div>Login in progress...</div>;

  if (error) return "An error has occurred";

  return <div>Done</div>;
}
