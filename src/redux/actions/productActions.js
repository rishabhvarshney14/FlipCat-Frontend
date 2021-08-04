import axios from "axios";
import * as action from "../constants/productConstant";

// URLs
import { URLs } from "../../constants/urls";

// Provides a list of Products
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URLs.products);
    dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCT_FAIL, payload: error.response });
  }
};

// Provides a Product with the given Id
export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URLs.getProduct(id));
    dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, paylod: error.response });
  }
};
