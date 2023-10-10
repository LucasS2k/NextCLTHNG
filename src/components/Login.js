import React, { useState } from "react";
import axios from "axios";
import { InputStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";

const Login = () => {
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

      console.log("Sesion iniciada", response.data);
    } catch (error) {
      console.error("Inicio de sesion fallido", error);
    }
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <div className="formulario">
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
      </div>
    </LoginStyled>
  );
};

export default Login;
