import { styled } from "styled-components";

export const StyledPayMethods = styled.div`
  display: flex;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--blanco);
  padding: 1rem;
  width: 50%;
  height: 70%;
  gap: 1rem;
  color: var(--negro);
  font-weight: 500;
  margin-top: 100px;
  box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
  img {
    height: 30px;
    width: 30px;
  }
`;
