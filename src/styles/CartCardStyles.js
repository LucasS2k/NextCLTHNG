import styled from "styled-components";
export const CartCardStyled = styled.div`
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  margin: 5px 0;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  .imageInCart {
    height: 50px;
  }
  .modalActive {
    display: flex;
  }
  .trashCan {
    border: none;
  }
  .trashCan:hover {
    cursor: pointer;
  }
`;
