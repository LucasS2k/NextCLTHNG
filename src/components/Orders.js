import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import axios from "axios";
const Orders = () => {
  const user = useSelector(selectUser);
  axios
    .get(`https://next-api-taupe.vercel.app/orders/all`, {
      headers: {
        "x-token": user.user.token,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
export default Orders;
