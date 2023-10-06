import styled from "styled-components";
export const LoginStyled = styled.form`
  display: flex;
  justify-content: center;
  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--blanco);
    padding: 1rem;
    width: 70%;
    height: 70%;
    gap: 16px;
    color: var(--negro);
    font-weight: 500;
    margin-top: 100px;
    left: auto;
    right: auto;
    box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  }
  .formulario a {
    color: var(--negro);
  }
  input {
    transition: all 0.5s;
  }
  .input .ingreso {
    border: none;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--gris);
  }
  .input label {
    pointer-events: none;
    bottom: 0;
  }
  .input input:focus {
    border-bottom: 2px solid var(--amarillo);
    outline: none;
  }
  .submitbutton {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    padding: 7px;
    border-radius: 10px;
  }
  .submitbutton:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
  .checkboxs {
    display: flex;
    flex-direction: row;
  }
`;
