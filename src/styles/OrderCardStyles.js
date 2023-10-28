import styled from "styled-components";
export const OrderCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blanco);
  padding: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  gap: 5px;
`;
export const OrderDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const ItemContainer = styled.div``;
export const StyledItems = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const ShowMore = styled.button`
  background-color: var(--negro);
  color: var(--blanco);
  border-style: solid;
  border-color: var(--negro);
  font-weight: 700;
  padding: 7px;
  border-radius: 10px;
`;
