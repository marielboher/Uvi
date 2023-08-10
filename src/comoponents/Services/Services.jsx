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
