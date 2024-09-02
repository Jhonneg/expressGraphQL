const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

export function getAllProducts() {
  return products;
}

export function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

export function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

export function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}
