import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginStyled } from "../styles/LoginStyles";
import * as Yup from "yup";
import { ErrorStyled } from "../styles/FormStyles";
import axios from "axios";
import { FormStyled, InputStyled } from "../styles/FormStyles";
import Modal from "./Modal";

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .trim()
    .email("Email inválido")
    .required("Ingrese un email"),
  password: Yup.string()
    .required("Ingrese una contraseña")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[0-9]/, "La contraseña debe tener al menos un dígito")
    .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula")
    .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula"),
});

function Register() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dynamicMessage = "Registrado con éxito, ya puede iniciar sesión";
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://next-api-taupe.vercel.app/auth/register",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          setIsModalVisible(true);
          setTimeout(() => {
            setIsModalVisible(false);
          }, 2000);
        } else {
          console.error("Registro fallido");
        }
      } catch (error) {
        console.error("Ha ocurrido un error", error);
      }
    },
  });

  return (
    <LoginStyled onSubmit={formik.handleSubmit}>
      <FormStyled>
        <div>
          <label htmlFor="nombre">Ingrese su nombre:</label>
          <InputStyled
            type="text"
            id="nombre"
            name="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            placeholder="Ingrese su nombre:"
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <div>
              <ErrorStyled>{formik.errors.nombre}</ErrorStyled>
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Ingrese su email:</label>
          <InputStyled
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Ingrese su email:"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>
              <ErrorStyled>{formik.errors.email}</ErrorStyled>
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Ingrese una contraseña:</label>
          <InputStyled
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Ingrese una contraseña:"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>
              <ErrorStyled>{formik.errors.password}</ErrorStyled>
            </div>
          ) : null}
        </div>
        <button type="submit" className="submitbutton">
          Registrarse
        </button>
        {isModalVisible && <Modal message={dynamicMessage} />}
      </FormStyled>
    </LoginStyled>
  );
}

export default Register;
