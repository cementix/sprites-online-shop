import { BASKET_ROUTE } from "../../utils/consts";
import Basket from "../../pages/basket/Basket";

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    element: <Basket />,
    key: 1,
  },
];
