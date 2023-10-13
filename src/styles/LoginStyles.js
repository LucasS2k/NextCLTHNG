import styled from "styled-components";
export const LoginStyled = styled.form`
  display: flex;
  justify-content: center;
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
