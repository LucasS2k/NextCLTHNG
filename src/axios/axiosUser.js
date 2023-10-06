import axios from "axios";
import { API_URL } from "../assets/img/data/constants";
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
export const createUser = async (nombre, email, password) => {
  try {
    await axios.post(`${API_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    return alert(error.response.data.errors[0].msg);
  }
};
