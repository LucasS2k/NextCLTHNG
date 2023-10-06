import { LoginStyled } from "../styles/LoginStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { loginUser } from "../axios/axiosUser";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object({
  ingresaremail: Yup.string()
    .trim()
    .email("Email inválido")
    .required("Ingrese un Email"),
  password: Yup.string().required("Por favor, ingrese su contraseña"),
});

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  return (
    <Formik
      initialValues={{ ingresaremail: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const loggedInUser = await loginUser(
          values.ingresaremail,
          values.password
        );
        if (loggedInUser) {
          dispatch(
            setUser({
              ...loggedInUser.usuario,
              token: loggedInUser.token,
            })
          );
          setUser(loggedInUser);
        }
      }}
    >
      {({ errors, touched }) => (
        <LoginStyled>
          <div className="formulario">
            <Input
              isError={errors.ingresaremail && touched.ingresaremail}
              name="ingresaremail"
              label="Email:"
              type="email"
            ></Input>
            <Input
              isError={errors.password && touched.password}
              name="password"
              label="Contraseña:"
              type="password"
            ></Input>
            <input type="submit" className="submitbutton" />
            <Link to="/login">Olvidé mi contraseña</Link>
            <Link to="/register">Crear una cuenta</Link>
          </div>
        </LoginStyled>
      )}
    </Formik>
  );
};

export default Login;
