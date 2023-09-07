import React, { useState, useEffect } from "react";
import style from "./CardService.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useServices } from "../../context/ServiceContext";
import { Link } from "react-router-dom";

export default function CardService({
  character,
  number,
  isOpen,
  renderForm,
  descriptionResume,
  descriptionComplete,
  includes,
  service,
  services,
  setCheckState,
}) {
  const isGuideService = character === "Guía de ayuda profesional";
  const thisServiceIncludes = includes === "Este servicio incluye:";

  const [showMore, setShowMore] = useState(isOpen || false);
  const [isChecked, setIsChecked] = useState(false);
  const [defaultOpen, setDefaultOpen] = useState(isGuideService); // Nuevo estado
  const { toggleService, selectedServices, setSelectedServices } =
    useServices();

  useEffect(() => {
    if (defaultOpen) {
      toggleService(number);
      setDefaultOpen(false);
    }
  }, [selectedServices]);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  const handleCheckboxChange = (itemID) => {
    if (itemID == 1) {
      services[2].check = false;
      setCheckState(false);
      setIsChecked(false);
    }
    setIsChecked(!isChecked);
    service.check = !service.check;
    if (isChecked) {
      setSelectedServices((prevServices) =>
        prevServices.filter((service) => service !== character)
      );
    } else {
      setSelectedServices((prevServices) => [...prevServices, character]);
    }
    renderForm(true);
  };

  const handleSolicitar = () => {
    handleCheckboxChange(number);
    setIsChecked(!isChecked);
    service.check = true;
  };

  return (
    <div className={style.contentAll} data-isopen={isOpen}>
      <div className={style.contentPrimary}>
        {!isGuideService && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              handleCheckboxChange(number);
            }}
          />
        )}
        <h6 className={style.title}>{character}</h6>
        <IoIosArrowDown
          size="25"
          className={style.arrow}
          onClick={() => [toggleService(number)]}
        />
      </div>
      <div className={style.buttonsContainer} data-isopen={isOpen}>
        <div className={style.infoMore} data-isopen={isOpen}>
          {showMore ? (
            <div className={style.infoMoreContent} data-isopen={isOpen}>
              {descriptionComplete}
              <ul className={style.listIncludes}>
                {includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button
                className={style.showMoreButton}
                onClick={toggleDescription}
              >
                Leer menos
              </button>
            </div>
          ) : (
            <div className={style.textInfo}>
              {descriptionResume}
              <button
                className={style.showMoreButton}
                onClick={toggleDescription}
              >
                Leer más
              </button>
            </div>
          )}
        </div>
        {isGuideService ? (
          <Link
            to={"http://uvi.ar/docs/guia_profesional_uvi.pdf"}
            className={style.downloadLink}
            target="_blank"
          >
            <button className={style.downloadButton}>Descargar</button>
          </Link>
        ) : (
          <button
            onClick={handleSolicitar}
            className={style.buttonSolicited}
            data-isopen={isOpen}
          >
            Solicitar
          </button>
        )}
      </div>
    </div>
  );
}
