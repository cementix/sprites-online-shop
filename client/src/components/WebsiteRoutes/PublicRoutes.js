import {
  AUTH_ROUTE,
  LANDING_ROUTE,
  SHOP_ROUTE,
  UNKNOWN_ROUTES,
} from "../../utils/consts";
import Shop from "../../pages/shop/Shop.jsx";
import Landing from "../../pages/landing/Landing.jsx";
import UnknownPage from "../../pages/unknown/UnknownPage.jsx";
import Auth from "../../pages/auth/Auth.jsx";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
    key: 1,
  },
  {
    path: LANDING_ROUTE,
    element: <Landing />,
    key: 2,
  },
  {
    path: UNKNOWN_ROUTES,
    element: <UnknownPage />,
    key: 3,
  },
  {
    path: AUTH_ROUTE,
    element: <Auth />,
    key: 3,
  },
];
