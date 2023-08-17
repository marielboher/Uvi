import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar({ dataAboutPosition }) {
  const [vistPhone, setVistPhone] = useState(false);

  if (vistPhone === true && dataAboutPosition < 100) setVistPhone(false);

  return (
    <div
      className={
        dataAboutPosition < 100 && vistPhone === false
          ? style.contentAllFixed
          : style.contentAll
      }
      style={vistPhone ? { height: "100vh", width: "100vw" } : {}}
    >
      <FiMenu
        size="30"
        className={vistPhone ? style.buttonMenuNone : style.buttonMenu}
        onClick={() => setVistPhone(true)}
      />
      {dataAboutPosition < 100 ? (
        <Link
          activeclass="active"
          to="home"
          ssmooth="true"
          offset={0}
          duration={500}
          className={style.links}
        >
          <img src={logo2} alt="" className={style.logo} />
        </Link>
      ) : (
        <div className={style.contentLogo}>
          <Link
            activeclass="active"
            to="home"

            ssmooth="true"
            offset={0}
            duration={500}
            className={style.links}
          >
            <img src={logo} alt="" className={style.logo} />
          </Link>
        </div>
      )}

      <div className={vistPhone ? style.contentLinksPhone : style.contentLinks}>
        <IoClose
          size="30"
          className={
            vistPhone ? style.buttonCloseMenu : style.buttonCloseMenuNone
          }
          onClick={() => setVistPhone(false)}
        />
        <Link
          activeclass="active"
          to="home"
          ssmooth="true"
          offset={0}
          duration={500}
          onClick={() => setVistPhone(false)}
        >
          <img src={logo2} alt="" className={style.logoMovile} />
        </Link>
        <Link
          activeclass="active"
          to="about"
          ssmooth="true"
          offset={20}
          duration={500}
          className={style.links}
          onClick={() => setVistPhone(false)}
        >
          Nosotros
        </Link>

        <Link
          activeclass="active"
          to="services"
          ssmooth="true"
          offset={-20}
          duration={500}
          className={style.links}
          onClick={() => setVistPhone(false)}
        >
          Servicios
        </Link>

        <Link
          activeclass="active"
          to="contact-us"
          ssmooth="true"
          offset={0}
          duration={500}
          className={style.links}
          onClick={() => setVistPhone(false)}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
