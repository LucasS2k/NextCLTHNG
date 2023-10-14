import React, { useState } from "react";
import axios from "axios";
import { InputStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";
import { setCurrentUser } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { FormStyled } from "../styles/FormStyles";
import { redirect } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://next-api-taupe.vercel.app/auth/login",
        formData
      );
      if (response.status === 202) {
        const user = response.data;

        dispatch(setCurrentUser(user));
        redirect("/home");
        console.log("Sesion iniciada", user);
      }
    } catch (error) {
      console.error("Inicio de sesion fallido", error);
    }
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <FormStyled>
        <label htmlFor="email">Ingrese su Email:</label>
        <InputStyled
          name="email"
          type="email"
          placeholder="Ingrese su Email:"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Ingrese su contraseña:</label>
        <InputStyled
          name="password"
          type="password"
          placeholder="Ingrese su contraseña:"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" className="submitbutton" />

        <a href="/login">Olvidé mi contraseña</a>
        <a href="/register">Crear una cuenta</a>
      </FormStyled>
    </LoginStyled>
  );
};

export default Login;
