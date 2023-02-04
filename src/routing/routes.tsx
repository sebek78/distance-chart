import { Outlet, Route, RootRoute } from "@tanstack/react-router";
import { ExchangeTokenPage, Homepage } from "../components/pages";

interface TokenParams {
  state: string;
  code: string;
  scope: "read";
}

function Root() {
  return <Outlet />;
}

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Homepage,
});

export const exchangeTokenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/exchange_token",
  component: ExchangeTokenPage,
  validateSearch: (search: Record<string, unknown>): TokenParams => {
    return {
      state: search.state || "",
      code: search.code || "",
      scope: search.scope || "read",
    } as TokenParams;
  },
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  exchangeTokenRoute,
]);
