import { StyledFooter } from "../styles/FooterStyles";
const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <ul className="footerlist">
          <li>
            <a href="#">Teléfono</a>
          </li>
          <li>
            <a href="#">Dirección</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">Trabajá con Nosotros</a>
          </li>
        </ul>
      </div>
      <div className="footerlogos">
        <ul className="footerlogos">
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-whatsapp whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};
export default Footer;
