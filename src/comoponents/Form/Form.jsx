import React from "react";
import style from "./Form.module.css";
import logo from "../../assets/logo1.png";
import { TiSocialLinkedinCircular, TiMail } from "react-icons/ti";

export default function Form() {
  return (
    <div className={style.contentAll} id="contact-us">
      <div className={style.contentForm}>
        <form action="">
          <div className={style.contentTitle}>
            {/* <div className={style.barra}></div> */}
            <h6 className={style.title}>Contacto</h6>
            <p>
              Ante cualquier consulta o duda puedes enviarnos un mensaje, nos
              comunicaremos a la brevedad.
            </p>
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Nombre</label> */}
            <input type="text" placeholder="Nombre" />
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Corro electronico</label> */}
            <input type="text" placeholder="Apellido" />
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Telefono</label> */}
            <input type="text" placeholder="Telefono" />
          </div>
          <div className={style.contentInputs}>
            {/* <label htmlFor="name">Corro electronico</label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Corro electronico"
            />
          </div>
          <div className={style.contentInputs}>
            <label placeholder="Mensaje">Mensaje</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
        <div className={style.contentImgInfo}>
          <img src={logo} alt="" />
          <a
            href="https://www.linkedin.com/company/universo-i/"
            target="_blank"
          >
            <TiSocialLinkedinCircular size="50" className={style.networks} />
          </a>
        </div>
      </div>
    </div>
  );
}
