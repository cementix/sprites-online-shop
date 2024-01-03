import { LANDING_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import Shop from "../../pages/shop/Shop.jsx";
import Landing from "../../pages/landing/Landing.jsx";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
    key: 1,
  },
  {
    path: LANDING_ROUTE,
    element: <Landing />,
    key: 1,
  },
];
