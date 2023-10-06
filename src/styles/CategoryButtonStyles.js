import styled from "styled-components";
export const CategoryButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  .category {
    background-color: var(--negro);
    color: var(--blanco);
    border-style: solid;
    border-color: var(--negro);
    font-weight: 700;
    box-shadow: -5px 5px 0px 0px var(--amarillo);
    transition: all 0.3s;
  }
  .category:hover {
    box-shadow: none;
    color: var(--amarillo);
    cursor: pointer;
  }
`;
