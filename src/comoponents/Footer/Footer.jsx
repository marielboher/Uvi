import React from "react";
import style from "./Footer.module.css";
import { TiSocialLinkedinCircular, TiMail } from "react-icons/ti";
import logo from "../../assets/logo1.png";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={style.contentAll} id="contacts">
      <div className={style.contentText}>
        <img src={logo} alt="" />
        <div className={style.networks}>
          <a
            href="https://www.linkedin.com/company/universo-i/"
            target="_blank"
          >
            <TiSocialLinkedinCircular size="40" className={style.logos} />
          </a>
          <p>
            {/* <TiMail size="40" className={style.logos} /> */}
            contacto@uvi.com.ar
          </p>
          <a href="mailto:info@uvi.com.ar" target="_blank">
            <TiMail size="40" className={style.logos} />
          </a>
        </div>
      </div>

      <div className={style.contentLinks}>
        <Link
          activeclass="active"
          to="home"
          spy={true}
          smooth="true"
          offset={0}
          duration={500}
          className={style.links}
        >
          Inicio
        </Link>
        <Link
          activeclass="active"
          to="about"
          spy={true}
          smooth="true"
          offset={20}
          duration={500}
          className={style.links}
        >
          Nosotros
        </Link>

        <Link
          activeclass="active"
          to="services"
          spy={true}
          smooth="true"
          offset={0}
          duration={500}
          className={style.links}
        >
          Servicios
        </Link>
        <Link
          activeclass="active"
          to="contact-us"
          spy={true}
          smooth="true"
          offset={50}
          duration={500}
          className={style.links}
        >
          Contacto
        </Link>
      </div>

      <div className={style.contentCreatorCopyright}>
        <h6 className={style.copyright}>© 2023 Uvi</h6>
      </div>
    </div>
  );
}
