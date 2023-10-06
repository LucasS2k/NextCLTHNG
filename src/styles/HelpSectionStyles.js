import styled from "styled-components";
export const HelpSectionStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--blanco);
  margin: 10%;
  padding: 1rem;
  gap: 16px;
  color: var(--negro);
  font-weight: 500;
  box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  & a {
    color: var(--negro);
  }
  .submitbutton {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding: 5px;
  }
  .submitbutton:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
  input {
    border: none;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid var(--gris);
    transition: all 0.5s;
  }
  label {
    pointer-events: none;
    bottom: 0;
  }
  .input {
    gap: 1rem;
  }
  .input input:focus {
    border-bottom: 2px solid var(--amarillo);
    outline: none;
  }
`;
