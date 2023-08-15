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
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.current.user_name.value) {
      newErrors.user_name = "El nombre es requerido";
    }
    if (!form.current.user_lastname.value) {
      newErrors.user_lastname = "El apellido es requerido";
    }
    if (!form.current.user_email.value) {
      newErrors.user_email = "El email es requerido";
    }
    if (!form.current.user_modalidad.value) {
      newErrors.user_modalidad = "La modalidad es requerida";
    }
    if (!form.current.user_area.value) {
      newErrors.user_area = "El área es requerida";
    }
    if (!form.current.user_profile.value) {
      newErrors.user_profile = "El perfil es requerido";
    }
    if (!form.current.user_location.value) {
      newErrors.user_location = "La ubicación es requerida";
    }
    if (!form.current.user_company.value) {
      newErrors.user_company = "La empresa es requerida";
    }
    if (!form.current.personal_linkedin.value) {
      newErrors.personal_linkedin = "El perfil personal es requerido";
    }
    if (!form.current.company_linkedin.value) {
      newErrors.company_linkedin = "El perfil de la empresa es requerido";
    }

    setErrors(newErrors);
    console.log(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
          setErrors({});
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.contentCompany}>
      <h4>
        Recibe recomendaciones de profesionales destacados para un área o sector
        específico en tu casilla de correo sin ningún costo.
      </h4>
      <form ref={form} onSubmit={sendEmail} className={style.form}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        {errors.user_name && (
          <p className={style.errorText}>{errors.user_name}</p>
        )}
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="user_lastname"
          value={formData.user_lastname}
          onChange={handleChange}
        />
        {errors.user_lastname && (
          <p className={style.errorText}>{errors.user_lastname}</p>
        )}
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        {errors.user_email && (
          <p className={style.errorText}>{errors.user_email}</p>
        )}
        <label htmlFor="company">Empresa:</label>
        <input
          type="text"
          id="company"
          name="user_company"
          value={formData.user_company}
          onChange={handleChange}
        />
        {errors.user_company && (
          <p className={style.errorText}>{errors.user_company}</p>
        )}
        <label htmlFor="personalLinkedIn">Perfil de LinkedIn personal:</label>
        <input
          type="text"
          id="personalLinkedIn"
          name="personal_linkedin"
          value={formData.personal_linkedin}
          onChange={handleChange}
        />
        {errors.personal_linkedin && (
          <p className={style.errorText}>{errors.personal_linkedin}</p>
        )}
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
        {errors.company_linkedin && (
          <p className={style.errorText}>{errors.company_linkedin}</p>
        )}
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
        {errors.user_profile && (
          <p className={style.errorText}>{errors.user_profile}</p>
        )}
        <label htmlFor="desiredProfile">Área(s)/Cargo(s)</label>
        <input
          type="text"
          id="area"
          name="user_area"
          value={formData.user_area}
          onChange={handleChange}
        />
        {errors.user_area && (
          <p className={style.errorText}>{errors.user_area}</p>
        )}
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
        {errors.user_modalidad && (
          <p className={style.errorText}>{errors.user_modalidad}</p>
        )}
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="user_location"
          value={formData.user_location}
          onChange={handleChange}
        />
        {errors.user_location && (
          <p className={style.errorText}>{errors.user_location}</p>
        )}
        <button type="submit" className={style.companyButton}>
          Suscribirse
        </button>
      </form>
    </div>
  );
};

export default CardCompany;
