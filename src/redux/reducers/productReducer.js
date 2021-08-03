import * as actionType from "../constants/productConstant";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
