import {
  getAllProducts,
  getProductByPrice,
  getProductById,
} from "./products.model";

export const Query = {
  products: () => {
    return getAllProducts();
  },
  productsByPrice: (_, args) => {
    return getProductByPrice(args.min, args.max);
  },
  product: (_, args) => {
    return getProductById(args.id);
  },
};
