import { styled } from "styled-components";
export const SkeletonCardStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #242424;
  width: 160px;
  height: 270px;
  margin: auto;
  overflow: hidden;
  box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  border-radius: 10px;

  @keyframes loading {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.2;
    }
  }
  .skeleton {
    background-color: var(--gris);
    animation: loading 1.5s infinite;
  }
  .skeleton-image,
  .skeleton-text {
    height: 100%;
    width: 100%;
  }
  .item img {
    transition: 0.5s all ease-in-out;
    overflow: hidden;
    z-index: 2;
  }

  .item img:hover {
    transform: scale(1.1);
    overflow: hidden;
  }
  .valor {
    display: flex;
    align-items: center;
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    color: var(--blanco);
    background-color: var(--negro);
    padding: 0.3rem;
    z-index: 2;
  }
  .itemdescription {
    z-index: 3;
    padding: 0.5rem;
  }
  .itemfoot {
    display: flex;
    z-index: 3;
    font-weight: 600;
  }
  .itemfoot a {
    color: var(--negro);
  }
  .itemfoot button {
    transition: all 0.5s;
    background-color: var(--amarillo);
    padding: 3px 5px 3px 5px;
    font-weight: 600;
    transition: all 0.5s;
  }
  .itemfoot button:hover {
    cursor: pointer;
    color: var(--blanco);
  }
  .boton-agregar {
    border: none;
  }
`;
