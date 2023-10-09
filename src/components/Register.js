import { useState } from "react";
import { LoginStyled } from "../styles/LoginStyles";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorStyled, InputStyled } from "../styles/FormStyles";
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
  const [formData, setFormData] = useState({
    nombre: "",
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
      const response = await fetch(
        "https://next-api-taupe.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Usuario registrado exitosamente");
      } else {
        console.error("Registro fallido");
      }
    } catch (error) {
      console.error("Ha ocurrido un error", error);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <LoginStyled onSubmit={handleSubmit}>
        <div className="formulario">
          <label htmlFor="nombre">Ingrese su Nombre:</label>
          <InputStyled
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingrese su Nombre:"
          />

          <ErrorMessage name="nombre" component={ErrorStyled} />
          <label htmlFor="email">Ingrese su Email:</label>
          <InputStyled
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su Email:"
          />
          <ErrorMessage name="email" component={ErrorStyled} />
          <label htmlFor="password">Ingrese una contraseña:</label>
          <InputStyled
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingrese una contraseña:"
          />
          <ErrorMessage name="password" component={ErrorStyled} />
          <div className="checkboxs">
            Deseo recibir novedades en mi casilla de correo
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="checkboxs">
            He leído y acepto los términos y condiciones
            <input
              type="checkbox"
              name="terms"
              label=" "
              className="checkbox"
            ></input>
          </div>
          <button type="submit">Registrar</button>
        </div>
      </LoginStyled>
    </Formik>
  );
}
export default Register;
