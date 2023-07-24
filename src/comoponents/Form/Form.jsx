import React, { useRef } from "react";
import style from "./Form.module.css";
import logo from "../../assets/logo1.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_o7hg6g4', 
        'template_ux1awao', 
        form.current,
        'RAngztwFezGpFS4n1' 
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.contentAll} id="contact-us">
      <div className={style.contentForm}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={style.contentTitle}>
            <h6 className={style.title}>Contacto</h6>
            <p>
              Ante cualquier consulta o duda puedes enviarnos un mensaje, nos
              comunicaremos a la brevedad.
            </p>
          </div>
          <div className={style.contentInputs}>
            <input type="text" name="user_name" placeholder="Nombre" />
          </div>
          <div className={style.contentInputs}>
            <input type="text" name="user_lastname" placeholder="Apellido" />
          </div>
          <div className={style.contentInputs}>
            <input type="text" name="user_phone" placeholder="Teléfono" />
          </div>
          <div className={style.contentInputs}>
            <input
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className={style.contentInputs}>
            <textarea name="message" cols="10" rows="5"></textarea>
          </div>

          <button type="submit" value="Send">Enviar</button>
        </form>
        <div className={style.contentImgInfo}>
          <img src={logo} alt="" />
          <a
            href="https://www.linkedin.com/company/universo-i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular
              size="50"
              className={style.networks}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

