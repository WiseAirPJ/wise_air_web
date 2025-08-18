import LoginPage from "@/pages/login/LoginPage";
import MainPage from "@/pages/main/MainPage";

type RouteType = {
  path: string;
  element: React.ReactElement;
  children?: RouteType[];
};

type PageNameType = "LOGIN_PAGE" | "MAIN_PAGE";

export const ADMIN_PATH = "/admin";
const PUBLIC_PATH = "/public";

export const allRoutes: Record<PageNameType, RouteType> = {
  LOGIN_PAGE: {
    path: "/login",
    element: <LoginPage />,
  },
  MAIN_PAGE: {
    path: `${PUBLIC_PATH}/main`,
    element: <MainPage />,
  },
};
