import { useEffect } from "react";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { exchangeTokenRoute } from "../../../routing/routes";
import { useTokens } from "../../../hooks/use-tokens";

export function ExchangeTokenPage() {
  const navigate = useNavigate({ from: "/exchange_token" });
  const { code } = useSearch({ from: exchangeTokenRoute.id });
  const { isLoading, isError, error, isSuccess } = useTokens(code);

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/main" });
    }
  }, [isSuccess]);

  if (isLoading) return <div>Login in progress...</div>;

  if (isError) {
    return (
      <>
        <Link to="/">Home</Link>
        <div>{error?.message || "Something went wrong."}</div>
      </>
    );
  }

  return null;
}
