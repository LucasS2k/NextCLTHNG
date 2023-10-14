import React, { useState } from "react";
import { StyledHeader } from "../styles/HeaderStyles";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { toggleHiddenCart } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { clearCurrentUser } from "../redux/user/userSlice";
const NavLinkStyled = styled(NavLink)`
  color: var(--blanco);
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 1rem;
  &.active {
    color: var(--amarillo);
  }
  &:hover {
    color: var(--amarillo);
  }
`;
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const user = useSelector(selectUser);
  const handleClearUser = () => {
    dispatch(clearCurrentUser());
  };
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const totalCart = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const dispatch = useDispatch();
  return (
    <StyledHeader>
      <NavLinkStyled to="/">
        <img
          src="https://res.cloudinary.com/dzostrpti/image/upload/v1687846548/Logotipo_Cervecer%C3%ADa_cl%C3%A1sico_negro_y_amarillo__1_-removebg-preview_ejaqfm.png"
          alt=""
          className="header-logo"
        ></img>
      </NavLinkStyled>

      <nav className="header_nav">
        <ul className="header_list_link">
          <li>
            <NavLinkStyled to="/">
              <i className="fa-solid fa-house"></i>Home
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/login">
              <i className="fa-solid fa-user"></i>Iniciar Sesión
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/register">
              {" "}
              <i className="fa-regular fa-user"></i>Registrarse
            </NavLinkStyled>
          </li>
        </ul>
      </nav>
      <div className="imgContainer">
        <div className="cartCheck" id="cartCheck">
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>
        <button
          id="botonCarrito"
          className="cartIcon"
          onClick={() => dispatch(toggleHiddenCart())}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span id="contadorCarrito">{totalCart}</span>
        </button>
        <button className="cartIcon" onClick={handleClick}>
          <label className="bar" htmlFor="check">
            <input
              type="checkbox"
              id="check"
              onClick={handleClick}
              className="checkbar"
            />

            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label>
        </button>
      </div>
      <div className={`${isShown ? "display" : "hidden"}`}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <div className="lineagris"></div>
          <li>
            {user.user ? (
              <Link to="/profile">Perfil</Link>
            ) : (
              <Link to="/login">Iniciar Sesión</Link>
            )}
          </li>
          <div className="lineagris"></div>
          <li>
            {user.user ? (
              <Link to="/" onClick={handleClearUser}>
                Cerrar sesión
              </Link>
            ) : (
              <Link to="/register">Registrarse</Link>
            )}
          </li>
          <div className="lineagris"></div>
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;
