import React, { useState } from "react";
import style from "./Services.module.css";
import { Reorder } from "framer-motion";
import CardService from "../CardService/CardService";
import { useServices } from "../../context/ServiceContext";
import CardCompany from "../CardCompany/CardCompany";

export default function Services() {
  const {
    selectedService,
    setSelectedService,
    activeButton,
    setActiveButton,
    toggleService,
    isProfessional,
  } = useServices();

  const [selectedRevision, setSelectedRevision] = useState(null);
  const [selectedArmado, setSelectedArmado] = useState(null);

  const [services, setServices] = useState([
    {
      number: 1,
      text: "Revisión de CV",
      descriptionResume:
        "Nos enfocamos en optimizar el contenido, formato y estructura de tu CV a través de comentarios e información detallada.",
      descriptionComplete:
        "El servicio de revisión de CV ofrece la oportunidad de obtener la mejor versión de tu currículum para que destaques en las búsquedas laborales. Nuestro equipo de expertos de recursos humanos revisará tu CV y te proporcionará comentarios detallados y sugerencias para mejorarlo. Nos enfocamos en optimizar el contenido, el formato y la estructura para que tu CV destaque y capte la atención de los reclutadores y así aumentar tus posibilidades de conseguir el trabajo que deseas. Este servicio incluye:",
      includes: [
        "Atención personalizada ",
        "Revisión de información existente del CV ",
        "Informe con recomendaciones y sugerencias para modificar el contenido, formato y estructura del CV ",
        "Instructivo de cómo realizar las modificaciones ",
        "Publicación y difusión de CV en LinkedIn (opcional) ",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Preferencias/Observaciones",
      ],
      additionalFields: ["Adjuntar CV"],
    },
    {
      number: 2,
      text: "Revisión de perfil de LinkedIn",
      descriptionResume:
        "Mejoramos tu perfil de LinkedIn brindando recomendaciones para optimizar tu visibilidad, destacar logros, potenciar tu marca personal y aumentar tus oportunidades de networking.",
      descriptionComplete:
        "El servicio de revisión de perfil de LinkedIn maximiza tu presencia profesional en la plataforma líder de redes laborales. Nuestro equipo de expertos analizará minuciosamente tu perfil y te proporcionará comentarios detallados para mejorar tu resumen, experiencia laboral, habilidades destacadas y secciones adicionales. Te ofreceremos recomendaciones específicas para optimizar tu visibilidad, resaltar tus logros y atraer la atención de reclutadores y empleadores. Confía en nuestro servicio para potenciar tu marca personal y aumentar tus oportunidades de networking y empleo en LinkedIn. Este servicio incluye: ",
      includes: [
        "Atención personalizada ",
        "Revisión de perfil existente de LinkedIn ",
        "IInforme con recomendaciones y sugerencias para realizar modificaciones en la presentación, resumen, experiencias, habilidades y secciones adicionales. ",
        "Instructivo de cómo realizar las modificaciones ",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Preferencias/Observaciones",
      ],
      additionalFields: ["Dirección del perfil de LinkedIn"],
    },
    {
      number: 3,
      text: "Armado de CV",
      descriptionResume:
        "Creamos un currículum profesional de alta calidad diseñado especialmente según tus preferencias y necesidades",
      descriptionComplete:
        "El servicio de armado de CV está diseñado para brindarte un currículum profesional y efectivo que resalte tus habilidades y experiencia. Nuestro equipo de expertos en redacción de CV colaborará contigo para recopilar la información necesaria y presentarla de manera clara y atractiva. Nos aseguramos de resaltar tus logros, destacar tus capacidades y adaptar el formato y diseño según tus necesidades y objetivos profesionales. Con nuestro servicio de armado de CV, contarás con un documento de alta calidad que te ayudará a destacar entre los demás candidatos y aumentar tus oportunidades de conseguir el trabajo deseado.",
      includes: [
        "Atención personalizada ",
        "Revisión de información existente del CV ",
        "Informe con recomendaciones y sugerencias para modificar el contenido, formato y estructura del CV ",
        "Instructivo de cómorealizar las modificaciones ",
        "Publicación y difusión de CV en LinkedIn (opcional) ",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "No tengo CV",
        "Preferencias/Observaciones",
      ],
      additionalFields: ["Adjuntar CV"],
    },
    {
      number: 4,
      text: "Armado de perfil de LinkedIn",
      descriptionResume:
        "Creamos tu perfil de LinkedIn para resaltar tus habilidades, experiencia y logros, optimizamos secciones y palabras clave para maximizar tu visibilidad.",
      descriptionComplete:
        "El servicio de armado de perfil de LinkedIn te ofrece la oportunidad de destacarte en la plataforma profesional más importante del mercado laboral actual. Nuestro equipo de expertos trabajará contigo para crear y optimizar estratégicamente tu perfil de LinkedIn, resaltando tus habilidades, experiencia y logros. Creamos un resumen atractivo, optimizamos las secciones de experiencia y educación, y agregamos palabras clave relevantes para mejorar tu visibilidad y captar la atención de reclutadores y empleadores potenciales. Con nuestro servicio, estarás posicionado de manera óptima para expandir tu red de contactos profesionales y aprovechar nuevas oportunidades laborales en LinkedIn.",
      includes: [
        "Atención personalizada ",
        "Creación de un nuevo perfil de LinkedIn u optimización total del existente ",
        "Información en formato digital para la importación directa de los datos de la nueva cuenta ",
        "Instructivo de cómo realizar futuras modificaciones ",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Preferencias/Observaciones",
        "No tengo perfil de LinkedIn",
      ],
      additionalFields: ["Dirección del perfil de LinkedIn"],
    },
  ]);

  function renderForm() {
    const service = services.find(
      (service) => service.number === selectedService
    );
    if (!service) return null;

    const commonFields = service.fields;
    const additionalFields = service.additionalFields;

    return (
      <div className={`${style.form} ${style.formContainer}`}>
        {commonFields.map((field) => (
          <div className={style.formServices} key={field}>
            <label>{field}:</label>
            <input type="text" />
          </div>
        ))}
        {additionalFields.map((field) => (
          <div className={style.formServices} key={field}>
            <label>{field}:</label>
            <input type={field === "Adjuntar CV" ? "file" : "text"} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className={style.contentAll} id="services">
      <div className={style.barra}></div>
      <h3 className={style.title}>Servicios</h3>
      <div className={style.card}>
        {isProfessional ? (
          <h5 className={style.titleCard}>Profesionales</h5>
        ) : (
          <h5 className={style.titleCard}>Empresas</h5>
        )}
        {isProfessional ? (
          <p className={style.subtitleCard}>
            Contamos con diferentes servicios diseñados para ayudarte a mejorar
            tus oportunidades y posibilidades de conseguir el empleo que estás
            buscando. Te invitamos a que los descubras y elijas los que se
            ajusten a tus necesidades actuales.
          </p>
        ) : (
          <p className={style.subtitleCard}>Descripcion empresas</p>
        )}
        <Reorder.Group
          axis="y"
          values={services.map((service) => service.number)}
          onReorder={(values) =>
            setServices(
              values.map((value, index) => ({
                ...services.find((service) => service.number === value),
                number: index + 1,
              }))
            )
          }
          className={style.contentCards}
        >
          {services.map((service) => {
            const isRevisionSelected = selectedRevision === service.number;
            const isArmadoSelected = selectedArmado === service.number;

            const isDisabled =
              (isRevisionSelected && service.text.includes("Revisión")) ||
              (isArmadoSelected && service.text.includes("Armado"));

            return (
              <Reorder.Item key={service.number} value={service.number}>
                {isProfessional && (
                  <CardService
                    isOpen={selectedService === service.number}
                    number={service.number}
                    functionChangue={toggleService}
                    character={service.text}
                    renderForm={setActiveButton}
                    descriptionResume={service.descriptionResume}
                    descriptionComplete={service.descriptionComplete}
                    includes={service.includes}
                    isDisabled={isDisabled}
                  />
                )}
              </Reorder.Item>
            );
          })}
          {!isProfessional && <CardCompany />}
        </Reorder.Group>
        {activeButton && isProfessional && renderForm() }
        {selectedService && <div className={style.formWrapper}></div>}
        <div className={style.donacion}>
          La donación sugerida se calcula en base a los recursos y esfuerzo
          requeridos para brindar un servicio de calidad. Siéntete libre de
          ajustar la donación según tu capacidad. Todos los servicios se brindan
          de la misma forma y calidad independiente de la donación realizada
          según lo solicitado. Si puedes donar por encima de la sugerencia
          ayudas a que esto sea posible.
          <p>$$$</p>
        </div>
        <button className={style.buttonDonate}>Donar</button>
      </div>
    </div>
  );
}
