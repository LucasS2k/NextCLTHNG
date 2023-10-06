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
