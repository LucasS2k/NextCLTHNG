import { selectUser } from "../redux/user/userSlice";
import { useState } from "react";
import { ErrorStyled } from "../styles/FormStyles";
import { FormStyled } from "../styles/FormStyles";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { InputStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";
import { useNavigate } from "react-router-dom";
const Validate = () => {
  const [isWrong, setIsWrong] = useState(false);
  const navigate = useNavigate();
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
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setIsWrong("El código ingresado es incorrecto");
      }
    }
  };
  return (
    <LoginStyled>
      <FormStyled onSubmit={handleSubmit}>
        <text>Valide su cuenta para tener acceso al historial de compras</text>
        <span>Tras una validación exitosa vuelva a iniciar sesión</span>
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
        {isWrong ? (
          <div>
            <ErrorStyled>{isWrong}</ErrorStyled>
          </div>
        ) : null}
        <button type="submit" className="submitbutton" onClick={handleSubmit}>
          Validar usuario
        </button>
      </FormStyled>
    </LoginStyled>
  );
};
export default Validate;
