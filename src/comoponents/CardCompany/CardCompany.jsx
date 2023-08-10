import React, { useRef, useState } from "react";
import style from "./cardCompany.module.css";
import emailjs from "@emailjs/browser";

const CardCompany = () => {
  const INITIAL_STATE = {
    user_name: "",
    user_lastname: "",
    user_email: "",
    user_company: "",
    personal_linkedin: "",
    company_linkedin: "",
    user_website: "",
    user_profile: "",
    user_modalidad: "",
    user_location: "",
    user_area: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_43zfxnm",
        "template_f3pesq8",
        form.current,
        "RAngztwFezGpFS4n1"
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
    <div className={style.contentCompany}>
      <p>
        Recibe recomendaciones de profesionales destacados para un área o sector
        específico en tu casilla de correo sin ningún costo.
      </p>
      <form ref={form} onSubmit={sendEmail} className={style.form}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="user_lastname"
          value={formData.user_lastname}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <label htmlFor="company">Empresa:</label>
        <input
          type="text"
          id="company"
          name="user_company"
          value={formData.user_company}
          onChange={handleChange}
        />
        <label htmlFor="personalLinkedIn">Perfil de LinkedIn personal:</label>
        <input
          type="text"
          id="personalLinkedIn"
          name="personal_linkedin"
          value={formData.personal_linkedin}
          onChange={handleChange}
        />
        <label htmlFor="companyLinkedIn">
          Perfil de LinkedIn de la empresa:
        </label>
        <input
          type="text"
          id="companyLinkedIn"
          name="company_linkedin"
          value={formData.company_linkedin}
          onChange={handleChange}
        />
        <label htmlFor="companyWebsite">Página web de la empresa:</label>
        <input
          type="text"
          id="companyWebsite"
          name="user_website"
          value={formData.user_website}
          onChange={handleChange}
        />
        <label htmlFor="desiredProfile">Perfil buscado:</label>
        <input
          type="text"
          id="desiredProfile"
          name="user_profile"
          value={formData.user_profile}
          onChange={handleChange}
        />
        <label htmlFor="desiredProfile">Área(s)/Cargo(s)</label>
        <input
          type="text"
          id="area"
          name="user_area"
          value={formData.user_area}
          onChange={handleChange}
        />
        <label htmlFor="mode">Modalidad:</label>
        <select
          id="mode"
          name="user_modalidad"
          value={formData.user_modalidad}
          onChange={handleChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="Presencial">Presencial</option>
          <option value="Híbrido">Híbrido</option>
          <option value="Remoto">Remoto</option>
        </select>
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="user_location"
          value={formData.user_location}
          onChange={handleChange}
        />
        <button type="submit" className={style.companyButton}>
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default CardCompany;
