import React from "react";
import style from "./Footer.module.css";
import { TiSocialLinkedinCircular, TiMail } from "react-icons/ti";
import logo from "../../assets/logo1.png";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className={style.contentAll} id="contacts">
      <div className={style.contentLinks}>
          <Link
            activeclass="active"
            to="home"
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
