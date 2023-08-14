import React, { useRef, useState } from "react";
import style from "./Form.module.css";
import logo from "../../assets/logo1.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import emailjs from "@emailjs/browser";

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
    let tempErrors = {};
    let isValid = true;

    for (let key in INITIAL_STATE) {
      if (!formData[key]) {
        tempErrors[key] = `El campo ${key.replace("_", " ")} es requerido`;
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Si no es valido, no envia el mail

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
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            {errors.user_name && <p>{errors.user_name}</p>}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="user_lastname"
              placeholder="Apellido"
              value={formData.user_lastname}
              onChange={handleChange}
              required
            />
            {errors.user_name && <p>{errors.user_lastname}</p>}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="user_phone"
              placeholder="Teléfono"
              value={formData.user_phone}
              onChange={handleChange}
              required
            />
            {errors.user_name && <p>{errors.user_phone}</p>}
          </div>
          <div className={style.contentInputs}>
            <input
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            {errors.user_name && <p>{errors.user_email}</p>}
          </div>
          <div className={style.contentInputs}>
            <textarea
              name="message"
              cols="10"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              required
            ></textarea>
            {errors.user_name && <p>{errors.message}</p>}
          </div>

          <button type="submit" value="Send">
            Enviar
          </button>
        </form>
        <div className={style.contentImgInfo}>
          <img src={logo} alt="" />
          <a
            href="https://www.linkedin.com/company/universo-i/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular size="50" className={style.networks} />
          </a>
        </div>
      </div>
    </div>
  );
}
