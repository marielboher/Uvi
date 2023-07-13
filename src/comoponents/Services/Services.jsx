import React, { useState } from "react";
import style from "./Services.module.css";
import { Reorder } from "framer-motion";
import CardService from "../CardService/CardService";
import { useServices } from "../../context/ServiceContext";
import CardCompany from "../CardCompany/CardCompany";
import ProfesionalService from "../ProfesionalService/ProfesionalService";

export default function Services() {
  const { isProfessional, setIsProfessional } = useServices();

  const handleProfessionalClick = () => {
    setIsProfessional(true);
  };

  const handleCompanyClick = () => {
    setIsProfessional(false);
  };

  return (
    <div className={style.contentAll} id="services">
      <div className={style.barra}></div>
      <h3 className={style.title}>Servicios</h3>
      <div className={style.card}>
        <div className={style.containerServices}>
          <div className={style.containerButtons}>
            <button
              onClick={handleProfessionalClick}
              className={isProfessional ? style.selectedButton : style.noSelectedButton}
            >
              Profesionales
            </button>
            <button
              onClick={handleCompanyClick}
              className={!isProfessional ? style.selectedButton : style.noSelectedButton}
            >
              Empresas
            </button>
          </div>
          {isProfessional ? (
            <ProfesionalService />
          ) : (
            <CardCompany />
          )}
        </div>
      </div>
    </div>
  );
}
{
  /* {isProfessional ? (
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
        {activeButton && isProfessional && renderForm()}
        {selectedService && <div className={style.formWrapper}></div>}
        <div className={style.donacion}>
          La donación sugerida se calcula en base a los recursos y esfuerzo
          requeridos para brindar un servicio de calidad. Siéntete libre de
          ajustar la donación según tu capacidad. Todos los servicios se brindan
          de la misma forma y calidad independiente de la donación realizada
          según lo solicitado. Si puedes donar por encima de la sugerencia
          ayudas a que esto sea posible.
          <p>$$$</p> */
}
{
  /* </div> */
}
