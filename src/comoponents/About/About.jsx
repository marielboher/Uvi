import React, { useRef, useEffect } from "react";
import CardReview from "../CardReview/CardReview";
import style from "./About.module.css";
import Team from "../Team/Team";
import avatar from "../../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { color } from "framer-motion";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "grey",
  //         display:'grid',
  //         gridArea: "center",
  //         height: "100%",
  //         fillOpacity: 1,
  //         fillRule: "evenodd",
  //         fill: "black",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         color: "blue", // Cambia el color a tu preferencia
  //         background: "yellow", // Cambia el color de fondo a tu preferencia
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const teamReviews = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: "foto",
      servicios: "Servicios brindados",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre2",
      profesion: "profesión2",
      linkedin: "linkedin2",
      foto: "foto2",
      servicios: "Servicios brindados2",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
    {
      nombre: "nombre3",
      profesion: "profesión3",
      linkedin: "linkedin3",
      foto: "foto3",
      servicios: "Servicios brindados3",
      experiencia:
        "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum pariatur minus. Assumenda tempora dolorum in atque quae? Deserunt, veniam.'",
    },
  ];

  const teamData = [
    {
      nombre: "nombre",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre2",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre3",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
    {
      nombre: "nombre4",
      profesion: "profesión",
      linkedin: "linkedin",
      foto: avatar,
    },
  ];

  return (
    <div className={style.contentAll} id="about">
      <div className={style.containerInfoAbout}>
        <div className={style.barra}></div>
        <h3>Nosotros</h3>
        <p className={style.description}>
          En nuestra plataforma de asesorías laborales, nos dedicamos a ofrecer
          servicios especializados para ayudarte a potenciar tu éxito
          profesional. Nuestro enfoque se centra en tres áreas clave: la mejora
          de tu currículum vitae (CV), la optimización de tu perfil de LinkedIn
          y la preparación para entrevistas laborales. Contamos con un equipo de
          expertos en recursos humanos dispuestos a brindarte asesoramiento
          personalizado y estratégico, diseñado para resaltar tus fortalezas y
          diferenciarte en el competitivo mercado laboral actual. Confía en
          nosotros para alcanzar tus objetivos profesionales y dar el siguiente
          paso en tu carrera.
        </p>
        <h2 className={style.subTitle}>Nuestra Mision</h2>
        <p className={style.description}>
        Buscamos disminuir la dificultad que tienen muchas personas por diferentes razones para acceder a oportunidades laborales. Promovemos la idea de que el talento y los valores éticos son las cualidades más importantes de un profesional. Creemos que una adecuada orientación conducen al éxito de los profesionales y empresas y que una relación de compromiso y honestidad mutua son la clave para sostenerlo en el tiempo.
        </p>
        <h2 className={style.subTitle}>Nuestro Equipo:</h2>
      </div>
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
        <div className={style.sliderContainer}>
          <Slider {...settings} className={style.sliderStyles}>
            {teamReviews.map((review, index) => (
              <div key={index} className={style.swiperContainer}>
                <CardReview
                  nombre={review.nombre}
                  servicios={review.servicios}
                  experiencia={review.experiencia}
                  profesion={review.profesion}
                  linkedin={review.linkedin}
                  foto={review.foto}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
