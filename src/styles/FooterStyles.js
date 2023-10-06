import styled from "styled-components";
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: var(--gris);
  color: var(--blanco);
  z-index: 3;
  font-weight: 500;
  transition: all 0.3s;
  position: absolute;
  bottom: 0;
  & a {
    background-color: var(--gris);
    color: var(--blanco);
    transition: all 0.6s;
  }
  & a:hover {
    color: var(--amarillo);
  }
  .footerlist {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .footerlogos {
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 30px;
  }
`;
