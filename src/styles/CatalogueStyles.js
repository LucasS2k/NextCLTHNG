import styled from "styled-components";

export const CatalogueStyled = styled.section`
  .subtitle {
    display: flex;
    color: var(--blanco);
    align-items: center;
    margin-left: 3rem;
  }
  .categories {
    top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    color: var(--blanco);
    gap: 30px;
  }
  .category {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    transition: all 0.3s;
    padding: 7px;
    border-radius: 10px;
  }
  .category:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
  .showMoreButton {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    transition: all 0.3s;
    margin-bottom: 2rem;
    padding: 7px;
    border-radius: 10px;
  }
  .showMoreButton:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
  .productContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 2rem;
  }
  .productContainer img {
    height: 200px;
  }
  .item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--blanco);
    width: 160px;
    margin: auto;
    overflow: hidden;
    box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    border-radius: 10px;
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
  .divDeUtilidad {
    display: flex;
    justify-content: center;
    padding-bottom: 16px;
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
