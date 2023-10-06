import styled, { keyframes } from "styled-components";
const slideleft = keyframes`
from{
  transform: translateX(550px);
}
to{
  transform: translateX(0);}
`;
export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--gris);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 80px;
  font-weight: 700;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  z-index: 4;
  .display {
    display: flex;
    position: absolute;
    top: 80px;
    background-color: var(--blanco);
    right: 0;
    z-index: 2;
    font-weight: 700;
    padding: 1rem;
    gap: 20px;
    font-size: 1rem;
    width: 150px;
    box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    transition: all 0.3s;
  }

  .checkbar {
    display: none;
  }
  .hidden {
    display: none;
  }
  .header-logo {
    height: 80px;
  }
  .header_list_link {
    display: flex;
    justify-content: flex-end;
  }
  .imgContainer {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
    align-items: center;
    justify-content: center;
  }
  .menuimg {
    height: 40px;
  }
  .menuimg:hover {
    cursor: pointer;
  }
  .cartImg {
    height: 60px;
    justify-self: right;
  }
  .cartImg:hover {
    cursor: pointer;
  }
  .cartIcon {
    color: var(--amarillo);
    background-color: transparent;
    height: 70px;
    border: none;
    font-size: 1.8rem;
  }
  .cartIcon:hover {
    cursor: pointer;
  }
  .fa {
    text-align: center;
    font-size: 2rem;
    cursor: pointer;
    color: white;
    visibility: hidden;
    transition: 0.6s;
  }

  .menu {
    position: absolute;
    top: 80px;
    background-color: var(--blanco);
    right: 0;
    z-index: 2;
    display: none;
    font-weight: 700;
    padding: 1rem;
    gap: 20px;
    font-size: 1rem;
    width: 150px;
    box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -webkit-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    -moz-box-shadow: 10px 9px 10px -6px rgba(0, 0, 0, 0.99);
    animation: ${slideleft} 3s linear;
  }
  .menu a {
    transition: all 0.6s;
  }
  .menu a:hover {
    color: var(--amarillo);
  }
  input[type="checkbox"] {
    appearance: none;
    display: none;
    visibility: hidden;
  }

  .bar {
    display: block;
    position: relative;
    cursor: pointer;
    width: 50px;
    height: 40px;
    display: none;
  }

  .bar span {
    position: absolute;
    width: 45px;
    height: 7px;
    background: #f1faee;
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  }

  .bar span.top {
    top: 0;
  }

  .bar span.middle {
    top: 17px;
  }

  .bar span.bottom {
    bottom: 0;
  }

  input[type]:checked ~ span.top {
    transform: rotate(45deg);
    transform-origin: top left;
    width: 48px;
    left: 5px;
  }

  input[type]:checked ~ span.bottom {
    transform: rotate(-45deg);
    transform-origin: top left;
    width: 48px;
    bottom: -1px;
    box-shadow: 0 0 10px #495057;
  }

  input[type]:checked ~ span.middle {
    transform: translateX(-20px);
    opacity: 0;
  }
  @media (max-width: 992px) {
    .header_nav {
      display: none;
    }
    .checkbar {
      display: flex;
      visibility: visible;
    }
    .bar {
      display: flex;
    }
  }
`;
