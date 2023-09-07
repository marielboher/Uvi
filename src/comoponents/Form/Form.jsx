import React, { useRef, useState } from "react";
import style from "./Form.module.css";
import logo from "../../assets/logo1.png";
import logoFooter from "../../assets/logo2.png";
import { TiMail, TiSocialLinkedinCircular } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const notifySuccess = () => toast.success("Formulario enviado con éxito!");

export default function Form() {
  const form = useRef();
  const INITIAL_STATE = {
    user_name: "",
    user_lastname: "",
    user_phone: "",
    user_email: "",
    message: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const tempErrors = {};

    if (!form.current.user_name.value) {
      tempErrors.user_name = "Por favor, ingresa tu nombre.";
    }
    if (!form.current.user_lastname.value) {
      tempErrors.user_lastname = "Por favor, ingresa tu apellido.";
    }
    if (!form.current.user_phone.value) {
      tempErrors.user_phone = "Por favor, ingresa tu teléfono.";
    }
    if (!form.current.user_email.value) {
      tempErrors.user_email = "Por favor, ingresa tu email.";
    }
    if (!form.current.message.value) {
      tempErrors.message = "Por favor, ingresa tu mensaje.";
    }

    setErrors(tempErrors);
    console.log(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_qhtsfhf",
        "template_z94ehc6",
        form.current,
        "Jlu3F4LlHbFLRqjnS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData(INITIAL_STATE);
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.contentAll} id="contact-us">
      <Toaster />
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
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              value={formData.user_name}
              onChange={handleChange}
            />
            {errors.user_name && (
              <p className={style.errorText}>{errors.user_name}</p>
            )}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="user_lastname"
              placeholder="Apellido"
              value={formData.user_lastname}
              onChange={handleChange}
            />
            {errors.user_lastname && (
              <p className={style.errorText}>{errors.user_lastname}</p>
            )}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="user_phone"
              placeholder="Teléfono"
              value={formData.user_phone}
              onChange={handleChange}
            />
            {errors.user_phone && (
              <p className={style.errorText}>{errors.user_phone}</p>
            )}
          </div>
          <div className={style.contentInputs}>
            <input
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && (
              <p className={style.errorText}>{errors.user_email}</p>
            )}
          </div>
          <div className={style.contentInputs}>
            <textarea
              name="message"
              cols="10"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
            ></textarea>
            {errors.message && (
              <p className={style.errorText}>{errors.message}</p>
            )}
          </div>

          <button type="submit" value="Send">
            Enviar
          </button>
        </form>
        <div className={style.contentImgInfo}>
          <img src={logo} alt="" />
          {/* <a
            href="https://www.linkedin.com/company/universo-i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size="50" className={style.networks} />
          </a> */}
        </div>
      </div>
      <div className={style.infoUvi}>
        <div className={style.contentText}>
          <div className={style.networks}>
            <a
              href="https://www.linkedin.com/company/universo-i/"
              target="_blank"
            >
              <BsLinkedin size="25" className={style.logos} />
            </a>
            <p>info@uvi.com.ar</p>
            <a href="mailto:info@uvi.com.ar" target="_blank">
              <MdEmail size="30" className={style.logos} />
            </a>
          </div>
          <img src={logoFooter} className={style.logoFooter}></img>
        </div>
      </div>
    </div>
  );
}
