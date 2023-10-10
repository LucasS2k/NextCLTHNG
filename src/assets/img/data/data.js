import axios from "axios";

export const fetchProductos = async () => {
  try {
    const response = await axios.get(
      "https://next-api-taupe.vercel.app/products/all"
    );
    return response.data;
  } catch (error) {
    console.error("Error getting data", error);
    throw error;
  }
};
