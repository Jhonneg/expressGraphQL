import {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
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

export const Mutation = {
  addNewProduct: (_, args) => {
    return addNewProduct(args.id, args.description, args.price);
  },
  addNewProductReview: (_, args) => {
    addNewProductReview(args.id, args.rating, args.comment);
  },
};
