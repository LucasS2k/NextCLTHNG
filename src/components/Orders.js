import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import { OrderContainerStyled } from "../styles/OrdersContainerStyles";

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
      <OrderContainerStyled>
        {loading ? (
          <div>Cargando...</div>
        ) : data.data.length > 0 ? (
          data.data.map((item) => (
            <OrderCard
              key={item._id}
              createdAt={item.createdAt}
              price={item.price}
              shippingCost={item.shippingCost}
              _id={item._id}
              items={item.items}
            />
          ))
        ) : (
          <div>No hay compras registradas</div>
        )}
      </OrderContainerStyled>
    </>
  );
};
export default Orders;
