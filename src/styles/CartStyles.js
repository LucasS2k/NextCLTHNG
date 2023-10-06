import styled, { keyframes } from "styled-components";
const slidedown = keyframes`
  from{
      transform: translateY(-150px);
  }
  to{
      transform: translateY(0);}
`;
export const CartStyled = styled.div`
  align-self: center;
  justify-self: center;
  position: fixed;
  background-color: var(--blanco);
  z-index: 6;
  top: 0;
  min-width: 500px;
  padding: 20px;
  transition: all 0.6s;
  border-radius: 10px;
  animation: ${slidedown} 0.5s linear;
  .cartCheck {
    display: none;
  }

  .modalActive .modal-carrito {
    margin-top: 0;
  }

  .modal-carrito h3 {
    color: var(--gris);
    padding-bottom: 5px;
  }
  .carritoCerrar {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    color: var(--amarillo);
    border: none;
    background-color: var(--blanco);
  }
  .carritoCerrar:hover {
    cursor: pointer;
  }
  .carritoCerrar:focus {
    outline: none;
  }
  .modal-carrito .precioProducto {
    padding-top: 10px;
    font-weight: 600;
  }
  .carrito-contenedor {
    display: flex;
    flex-direction: column;
  }
  .cartIcon {
    color: var(--amarillo);
    background-color: transparent;
    height: 50px;
    border: none;
    font-size: larger;
  }
  .cartIcon:hover {
    cursor: pointer;
  }
  .submitbutton {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    border-radius: 10px;
    padding: 5px;
    margin-top: 0.5rem;
    transition: all 0.3s;
  }
  .submitbutton:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
  .itemfoot {
    display: flex;
    justify-content: space-between;
    z-index: 3;
    font-weight: 600;
    padding-right: 1rem;
  }
  @media (max-width: 992px) {
    min-width: 350px;
    gap: 5px;
    padding: 1rem;
  }
  @media (max-width: 576px) {
    min-width: 300px;
    gap: 1rem;
    padding: 1rem;
  }
`;
