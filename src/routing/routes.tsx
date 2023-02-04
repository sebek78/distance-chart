import { Outlet, Route, RootRoute } from "@tanstack/react-router";
import { ExchangeTokenPage, Homepage } from "../components/pages";

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

const exchangeTokenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/exchange_token",
  component: ExchangeTokenPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  exchangeTokenRoute,
]);
