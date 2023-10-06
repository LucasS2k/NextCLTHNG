import styled from "styled-components";

export const StyledHero = styled.section`
  .hero {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    padding: 0rem;
    background: radial-gradient(
      circle,
      rgba(36, 36, 36, 1) 24%,
      rgba(252, 70, 107, 0) 100%
    );
    overflow: hidden;
    position: relative;
  }
  @keyframes escala {
    0% {
      scale: 1.2;
    }
    100% {
      scale: 1;
    }
  }
  .hero img {
    display: flex;
    margin: auto;
    transition: all 0.3s;
    max-width: 400px;
    max-height: 400px;
    animation: escala 1s ease-in;
    background-color: transparent;
  }
  .titulo {
    top: 0;
    color: var(--blanco);
    background-color: transparent;
    gap: 20px;
    padding: 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .herolink {
    z-index: 2;
    width: 80px;
    left: 0;
    bottom: 0;
    position: absolute;
    padding: 0.5rem;
    background-color: var(--negro);
    color: var(--blanco);
    font-weight: 700;
    transition: all 0.3s;
  }
  .herolink:visited {
    color: var(--blanco);
  }
  .herolink:hover {
    color: var(--amarillo);
  }
  @media (max-width: 992px) {
    .hero {
      display: flex;
      margin-left: 10%;
      margin-right: 10%;
      margin-top: 80px;
    }
    .hero img {
      width: auto;
      height: 300px;
    }
  }
`;
