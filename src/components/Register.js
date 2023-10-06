import React from "react";
import { LoginStyled } from "../styles/LoginStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import { API_URL } from "../assets/img/data/constants";
import axios from "axios";
import { loginUser } from "../axios/axiosUser";

const validationSchema = Yup.object({
  name: Yup.string().required("Ingrese su nombre"),
  email: Yup.string()
    .trim()
    .email("Email inválido")
    .required("Ingrese un Email"),
  password: Yup.string()
    .required("Ingrese una contraseña")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[0-9]/, "La contraseña debe tener al menos un dígito")
    .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula")
    .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula"),
  repeatPassword: Yup.string()
    .required("Reingrese su contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  terms: Yup.boolean().oneOf([true], "Requerido"),
});

const Register = () => {
  const createUser = async (nombre, email, password) => {
    try {
      await axios.post(`${API_URL}/auth/register`, {
        nombre,
        email,
        password,
      });
      const user = await loginUser(email, password);
      return user;
    } catch (error) {
      return alert(error.response.data.errors[0].msg);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const user = await createUser(values.name, values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        terms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <LoginStyled>
          <div className="formulario">
            <Input
              isError={errors.name & touched.name}
              name="name"
              label="Ingrese su Nombre:"
              type="string"
            ></Input>
            <Input
              isError={errors.email & touched.email}
              name="email"
              label="Ingrese su Email:"
              type="mail"
            ></Input>
            <Input
              isError={errors.password & touched.password}
              name="password"
              label="Ingrese una contraseña:"
              type="password"
            ></Input>
            <Input
              isError={errors.repeatPassword & touched.repeatPassword}
              name="repeatPassword"
              label="Repita su contraseña:"
              type="password"
            ></Input>
            <div className="checkboxs">
              Deseo recibir novedades en mi casilla de correo
              <input type="checkbox" className="checkbox" />
            </div>
            <div className="checkboxs">
              He leído y acepto los términos y condiciones
              <Input
                type="checkbox"
                name="terms"
                label=" "
                className="checkbox"
              />
            </div>
            <input type="submit" className="submitbutton" />
          </div>
        </LoginStyled>
      )}
    </Formik>
  );
};

export default Register;
