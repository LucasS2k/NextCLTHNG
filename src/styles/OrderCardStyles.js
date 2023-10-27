import styled from "styled-components";
export const OrderCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--blanco);
  padding: 0.5rem;
  border-radius: 10px;
  gap: 5px;
`;
export const StyledItems = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OrderDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
