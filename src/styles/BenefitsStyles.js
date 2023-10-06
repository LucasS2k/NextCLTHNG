import styled from "styled-components";
export const BenefitStyled = styled.section`
  & .beneficios {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  & .benefitem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color: trna;
    height: 60px;
    width: 150px;
    align-items: center;
    padding: 1rem;
    transition: all 0.3s;
  }
  & .benefitem span {
    color: var(--blanco);
    transition: all 0.3s;
  }
  & .benefitem .benefitemImage:hover {
    cursor: pointer;
    transform: translateY(10px);
  }
  & .benefitem a:hover {
    cursor: pointer;
  }
  & .benefitemImage {
    height: 70px;
    transition: all 0.3s;
  }
  @media (max-width: 576px) {
    .beneficios {
      flex-wrap: wrap;
      gap: 0px;
      margin: 0;
    }
    .benefitemImage {
      height: 40px;
    }
  }
`;
