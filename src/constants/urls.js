const baseURL = "https://calm-depths-77910.herokuapp.com";

export const URLs = {
  base: baseURL,
  signup: `${baseURL}/signup`,
  login: `${baseURL}/login`,
  products: `${baseURL}/products`,
  getProduct: (id) => `${baseURL}/products/${id}`,
};
