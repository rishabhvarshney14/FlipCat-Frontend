import axios from "axios";
import * as actions from "../constants/cartConstant";

const url = "http://localhost:8000";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products/${id}`);

    dispatch({ type: actions.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error while calling add to cart");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actions.REMOVE_FROM_CART, payload: id });
};
