import React, { useState } from 'react'
import style from './cardCompany.module.css'

const CardCompany = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    personalLinkedIn: "",
    companyLinkedIn: "",
    companyWebsite: "",
    desiredProfile: "",
    mode: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="company">Empresa:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <label htmlFor="personalLinkedIn">Perfil de LinkedIn personal:</label>
        <input
          type="text"
          id="personalLinkedIn"
          name="personalLinkedIn"
          value={formData.personalLinkedIn}
          onChange={handleChange}
        />
        <label htmlFor="companyLinkedIn">Perfil de LinkedIn de la empresa:</label>
        <input
          type="text"
          id="companyLinkedIn"
          name="companyLinkedIn"
          value={formData.companyLinkedIn}
          onChange={handleChange}
        />
        <label htmlFor="companyWebsite">Página web de la empresa:</label>
        <input
          type="text"
          id="companyWebsite"
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
        <label htmlFor="desiredProfile">Perfil buscado:</label>
        <input
          type="text"
          id="desiredProfile"
          name="desiredProfile"
          value={formData.desiredProfile}
          onChange={handleChange}
        />
        <label htmlFor="mode">Modalidad:</label>
        <select id="mode" name="mode" value={formData.mode} onChange={handleChange}>
          <option value="">Seleccione una opción</option>
          <option value="Presencial">Presencial</option>
          <option value="Híbrido">Híbrido</option>
          <option value="Remoto">Remoto</option>
        </select>
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default CardCompany