import { ErrorMessage, Field } from "formik";
import { InputStyled } from "../styles/FormStyles";
import { ErrorStyled } from "../styles/FormStyles";
const Input = ({ label, type, name, isError }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Field
        name={name}
        type={type}
        id={label}
        error={isError}
        as={InputStyled}
        placeholder={label}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </div>
  );
};
export default Input;
