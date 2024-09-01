import { getAllOrders } from "./orders.model";

export const Query = {
  orders: () => {
    return getAllOrders();
  },
};
