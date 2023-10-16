import { selectUser } from "../redux/user/userSlice";
import { useState } from "react";
import { FormStyled } from "../styles/FormStyles";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { InputStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";
const Validate = () => {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "https://next-api-taupe.vercel.app/auth/verify",
        {
          email: email,
          code: code,
        }
      );
    } catch (error) {
      console.log(error);
      //en caso de error controlarlo
      //asda
    }
  };
  return (
    <LoginStyled>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="email">Ingrese su email:</label>
        <InputStyled
          type="text"
          name="email"
          placeholder="Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="code">Ingrese el código de verificación:</label>
        <InputStyled
          type="text"
          name="code"
          placeholder="Código de verificación:"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="submitbutton" onClick={handleSubmit}>
          Verificar usuario
        </button>
      </FormStyled>
    </LoginStyled>
  );
};
export default Validate;
