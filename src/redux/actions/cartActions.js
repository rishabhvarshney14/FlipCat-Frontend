import axios from "axios";
import * as actions from "../constants/cartConstant";

// URL
import { URLs } from "../../constants/urls";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(URLs.getProduct(id));

    dispatch({ type: actions.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error while calling add to cart");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actions.REMOVE_FROM_CART, payload: id });
};
