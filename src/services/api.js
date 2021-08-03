import axios from "axios";

const url = "http://localhost:8000";

// Authenticate Sign Up of User
export const authenticateSignUp = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("Error while calling SignUp API");
  }
};

// Authenticate Log In of User
export const authenticateLogIn = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
