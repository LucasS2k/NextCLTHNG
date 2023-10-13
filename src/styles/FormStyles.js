import styled from "styled-components";
export const InputStyled = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid var(--gris);
  transition: all 0.5s;
  &:focus {
    border-bottom: 2px solid var(--amarillo);
    outline: none;
  }
`;
export const ErrorStyled = styled.span`
  color: var(--rojo);
`;

export const FormStyled = styled.div`
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
`;
