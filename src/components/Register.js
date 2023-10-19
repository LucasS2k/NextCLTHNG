import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginStyled } from "../styles/LoginStyles";
import * as Yup from "yup";
import axios from "axios";
import { FormStyled, InputStyled } from "../styles/FormStyles";

const validationSchema = Yup.object({
  nombre: Yup.string().required("Ingrese su nombre"),
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
});

function Register() {
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
          console.log("Usuario registrado exitosamente");
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
          <label htmlFor="nombre">Ingrese su Nombre:</label>
          <InputStyled
            type="text"
            id="nombre"
            name="nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
          />
          {formik.touched.nombre && formik.errors.nombre ? (
            <div>{formik.errors.nombre}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Ingrese su Email:</label>
          <InputStyled
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
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
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Registrar</button>
      </FormStyled>
    </LoginStyled>
  );
}

export default Register;
