import axios from "axios";
// import { API_URL } from "../assets/img/data/constants";
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `https://next-api-taupe.vercel.app/auth/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    return alert(error.response.data.msg);
  }
};
