import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import CardReview from "../CardReview/CardReview";
import style from "./About.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Team from "../Team/Team";

export default function About({ receiveDataAbout }) {
  const aboutRef = useRef();

  const teamReviews = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
      servicios: "Servicios brindados",
      experiencia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre2",
      profesion: "profesión2",
      linkedin: "linkedin2",
      foto: "foto2",
      servicios: "Servicios brindados2",
      experiencia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre3",
      profesion: "profesión3",
      linkedin: "linkedin3",
      foto: "foto3",
      servicios: "Servicios brindados3",
      experiencia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
  ];

  const teamData = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
    },
    {
      nombre: "nombre2",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
    },
    {
      nombre: "nombre3",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
    },
    {
      nombre: "nombre4",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
    },
  ];

  return (
    <div className={style.contentAll} id="about" ref={aboutRef}>
      <dic className={style.containerInfoAbout}>
        <div className={style.barra}></div>
        <h3>Nosotros</h3>
        <p className={style.description}>
          En nuestra plataforma de asesorías laborales, nos dedicamos a ofrecer
          servicios especializados para ayudarte a potenciar tu éxito profesional.
          Nuestro enfoque se centra en tres áreas clave: la mejora de tu
          currículum vitae (CV), la optimización de tu perfil de LinkedIn y la
          preparación para entrevistas laborales. Contamos con un equipo de
          expertos en recursos humanos dispuestos a brindarte asesoramiento
          personalizado y estratégico, diseñado para resaltar tus fortalezas y
          diferenciarte en el competitivo mercado laboral actual. Confía en
          nosotros para alcanzar tus objetivos profesionales y dar el siguiente
          paso en tu carrera.
        </p>
      </dic>
      <div className={style.containerCardTeam}>
        {teamData.map((member) => (
          <Team
            key={member.nombre}
            nombre={member.nombre}
            profesion={member.profesion}
            linkedin={member.linkedin}
            foto={member.foto}
          />
        ))}
      </div>
      <div className={style.containerCardReview}>
        <div className={style.titleReview}>
            <div className={style.barra}></div>
              <h3>Reseñas</h3>
        </div>
        <div className={style.cardsReview}>
              {teamReviews.map((review) => (
                <CardReview
                  key={review.nombre}
                  nombre={review.nombre}
                  servicios={review.servicios}
                  experiencia={review.experiencia}
                  profesion={review.profesion}
                  linkedin={review.linkedin}
                  foto={review.foto}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
