import React, { useState } from "react";
import style from "./CardService.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useServices } from "../../context/ServiceContext";

export default function CardService({
  character,
  number,
  isOpen,
  renderForm,
  descriptionResume,
  descriptionComplete,
  includes,
  service,
  serviceCheck
}) {
  const [showMore, setShowMore] = useState(isOpen || false);
  const [isChecked, setIsChecked] = useState(false);
  const { toggleService, selectedService, setSelectedService } = useServices();
  // const [serviceChecked, setServiceChecked] = useState(selectedService);
  //hacer un array pusheando lo seleccionado y comparar numero agregar checked en padre
  console.log("selectedService", selectedService);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };
  const handleCheckboxChange = () => {
    console.log("character", character);
    console.log("service", service);
    setIsChecked(!isChecked);
  };

  const handleSolicitar = () => {
    renderForm(true);
    setIsChecked(true);
  };
  return (
    <div className={style.contentAll} data-isopen={isOpen}>
      <div className={style.contentPrimary}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />{" "}
        <h6 className={style.title}>{character}</h6>
        <IoIosArrowDown
          size="25"
          className={style.arrow}
          onClick={() => [toggleService(number), renderForm(false)]}
        />
      </div>
      <div className={style.buttonsContainer} data-isopen={isOpen}>
        <div className={style.infoMore} data-isopen={isOpen}>
          {showMore ? (
            <div className={style.infoMoreContent} data-isopen={isOpen}>
              {descriptionComplete}
              {includes}
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
        <button
          onClick={handleSolicitar}
          className={style.buttonSolicited}
          data-isopen={isOpen}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}
