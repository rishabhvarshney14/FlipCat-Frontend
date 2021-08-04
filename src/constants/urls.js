const baseURL = "http://localhost:8000";

export const URLs = {
  base: baseURL,
  signup: `${baseURL}/signup`,
  login: `${baseURL}/login`,
  products: `${baseURL}/products`,
  getProduct: (id) => `${baseURL}/products/${id}`,
};
