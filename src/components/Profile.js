import { useSelector } from "react-redux";
import Validate from "./Validate";
import { selectUser } from "../redux/user/userSlice";
import Orders from "./Orders";

const Profile = () => {
  const user = useSelector(selectUser);
  const key = user.user?.usuario.verified ? "verified" : "unverified";
  if (!user) {
    return null;
  }
  return (
    <div key={key}>
      {user.user && user.user.usuario.verified ? <Orders /> : <Validate />}
    </div>
  );
};
export default Profile;
