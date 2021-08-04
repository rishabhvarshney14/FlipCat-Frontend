import axios from "axios";

// Urls
import { URLs } from "../constants/urls";

// Authenticate Sign Up of User
export const authenticateSignUp = async (user) => {
  try {
    return await axios.post(URLs.signup, user);
  } catch (error) {
    console.log("Error while calling SignUp API");
  }
};

// Authenticate Log In of User
export const authenticateLogIn = async (user) => {
  try {
    return await axios.post(URLs.login, user);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
