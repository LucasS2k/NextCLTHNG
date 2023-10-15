import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import axios from "axios";
import { useState, useEffect } from "react";

const Orders = () => {
  const user = useSelector(selectUser);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get(
          `https://next-api-taupe.vercel.app/orders/all`,
          {
            headers: {
              "x-token": user.user.token,
            },
          }
        );

        setData(response.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchOrders();
  }, [user.user.token]);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : data.data.length > 0 ? (
        data.data.map((item) => <div key={item._id}>Valor: ${item.price}</div>)
      ) : (
        <div>No hay compras registradas</div>
      )}
    </>
  );
};
export default Orders;
