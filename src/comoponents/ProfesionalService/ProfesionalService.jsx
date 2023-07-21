import React, { useState } from "react";
import CardService from "../CardService/CardService";
import { useServices } from "../../context/ServiceContext";
import style from "./profesionalService.module.css";
import { Reorder } from "framer-motion";
import CardCompany from "../CardCompany/CardCompany";

const ProfesionalService = () => {
  const { activeButton, setActiveButton, isProfessional, selectedService } =
    useServices();

  const [services, setServices] = useState([
    {
      number: 1,
      text: "Revisión de CV",
      check: false,
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
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 2,
      check: false,
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
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 3,
      check: false,

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
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 4,
      check: false,

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
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 5,
      check: false,

      text: "Armado de carta de presentación",
      descriptionResume:
        "Creamos una carta de presentación diseñada para brindarte una herramienta efectiva que te ayudará a destacar y causar una excelente impresión en cualquier proceso de solicitud de empleo.",
      descriptionComplete:
        "Ya sea que estés buscando tu primer empleo, cambiar de carrera o ascender en tu campo profesional, una carta de presentación bien redactada puede marcar la diferencia. Nuestros expertos trabajarán estrechamente contigo para comprender tus metas, logros y fortalezas, y traducirán esa información en un documento claro y convincente que destaque tus cualidades y resalte tu potencial. Al confiar en nuestro servicio, recibirás una carta de presentación única y personalizada que aumentará tus posibilidades de captar la atención de los empleadores y abrirte las puertas a nuevas oportunidades profesionales. Este servicio incluye: ",
      includes: [
        " Atención personalizada",
        "Creación de una carta de presentación desde cero",
        "Entrega del documento en formato PDF y enlace de edición para futuras modificaciones",
        "Instructivo de cómo realizar modificaciones",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 6,
      check: false,

      text: "Entrenamiento para entrevistas",
      descriptionResume:
        "Te preparamos para destacar en entrevistas mediante sesiones personalizadas para mejorar tu comunicación, respuestas y lenguaje corporal",
      descriptionComplete:
        "El servicio de entrenamiento para entrevistas te preparará para sobresalir en distintos procesos de selección. Nuestro equipo de expertos en recursos humanos te ofrecerá sesiones personalizadas para mejorar tus habilidades de comunicación, desarrollar respuestas sólidas a preguntas difíciles y perfeccionar tu lenguaje corporal y presentación. Recibirás retroalimentación constructiva y guía sobre cómo transmitir confianza y competencia durante las entrevistas. Con nuestro servicio, te sentirás preparado y seguro para enfrentar cualquier entrevista, aumentando tus posibilidades de éxito en la búsqueda de empleo. Este servicio incluye: ",
      includes: [
        "Atención personalizada ",
        "Modalidad de entrenamiento: virtual",
        "Simulacros de entrevistas",
        "Sugerencias y recomendaciones adaptables a distintos tipos de entrevista",
        " Evaluación del perfil profesional y recomendación a empresas (Opcional)",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
    {
      number: 7,
      check: false,

      text: "Guía de prompts de Chat GPT",
      descriptionResume:
        "La guía de prompts de Chat GPT para profesionales en búsqueda de empleo ofrece una variedad de preguntas predefinidas para utilizar en conversaciones con el modelo de Chat GPT y recibir respuestas relevantes durante el proceso de búsqueda de empleo.",
      descriptionComplete:
        "La guía de prompts de Chat GPT es una herramienta esencial para profesionales en búsqueda de empleo. Al utilizar las preguntas predefinidas en conversaciones con el modelo de Chat GPT, los usuarios pueden obtener respuestas personalizadas y valiosas sobre la redacción de currículums, preparación para entrevistas y estrategias de búsqueda de empleo. Esta guía les proporciona orientación práctica y consejos útiles, lo que les permite mejorar su proceso de búsqueda de empleo y aumentar sus posibilidades de éxito. Este servicio incluye: ",
      includes: [
        "Guía de prompts de Chat GPT en formato PDF",
        "Descarga sin costo",
        "Acceso sin costo a actualizaciones",
      ],
      fields: [
        "Nombre",
        "Apellido",
        "Correo electrónico",
        "Número de WhatsApp",
        "Perfil de Linkedin",
        "Ubicación",
        "Área/Cargo",
        "Modalidad",
        "Adjuntar CV",
        "Publicar y difundir mi CV (Opcional)",
        "Evaluar y recomendar mi perfil profesional a empresas (Opcional)",
        "Preferencias/Observaciones",
      ],
    },
  ]);

  function renderForm() {
    const service = services.find(
      (service) => service.number === selectedService
    );
    if (!service) return null;

    const commonFields = service.fields;

    return (
      <div className={style.formContainer}>
        {commonFields.map((field) => (
          <div className={style.formServices} key={field}>
            <label>{field}:</label>
            <input type="text" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={style.cardServices}>
      <div className={style.subtitleCard}>
        <p>
          Contamos con diferentes servicios diseñados para ayudarte a mejorar
          tus oportunidades y posibilidades de conseguir el empleo que estás
          buscando. Te invitamos a que los descubras y elijas los que se ajusten
          a tus necesidades actuales.
        </p>
      </div>
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
          return (
            <Reorder.Item key={service.number} value={service.number}>
              {isProfessional && (
                <CardService
                  isOpen={selectedService === service.number}
                  number={service.number}
                  character={service.text}
                  service={service}
                  renderForm={setActiveButton}
                  descriptionResume={service.descriptionResume}
                  descriptionComplete={service.descriptionComplete}
                  includes={service.includes}
                  serviceCheck={service.check}
                />
              )}
            </Reorder.Item>
          );
        })}
        {!isProfessional && <CardCompany />}
        {activeButton && isProfessional && renderForm()}
      </Reorder.Group>
      <div className={style.containerBtn}>
        <button className={style.buttonDonate}>Donar</button>
      </div>
    </div>
  );
};

export default ProfesionalService;
