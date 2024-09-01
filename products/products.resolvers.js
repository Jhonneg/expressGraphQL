import { getAllProducts } from "./products.model";

export const Query = {
  products: () => {
    return getAllProducts();
  },
  productsByPrice: (parent, args) => {},
};
