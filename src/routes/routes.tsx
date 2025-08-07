import LoginPage from "@/pages/main/LoginPage";

type RouteType = {
  path: string;
  element: React.ReactElement;
  children?: RouteType[];
};

export const allRoutes: Record<string, RouteType> = {
  LOGIN_PAGE: {
    path: "/login",
    element: <LoginPage />,
  },
};
