import React, { useState } from "react";
import style from "./CardService.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CardService({
  character,
  functionChangue,
  number,
  isOpen,
  renderForm,
  descriptionResume,
  descriptionComplete,
  includes,
}) {
  const [showMore, setShowMore] = useState(isOpen || false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={style.contentAll} data-isOpen={isOpen}>
      <div className={style.contentPrimary}>
        <input type="checkbox" />
        <h6 className={style.title}>{character}</h6>
        <IoIosArrowDown
          size="25"
          className={style.arrow}
          onClick={() => [functionChangue(number), renderForm(false)]}
        />
      </div>
      <div className={style.buttonsContainer} data-isOpen={isOpen}>
        <div className={style.infoMore} data-isOpen={isOpen}>
          {showMore ? (
            <div className={style.infoMoreContent} data-isOpen={isOpen}>
              {descriptionComplete}
              {includes}
              <button className={style.showMoreButton} onClick={toggleDescription}>Leer menos</button>
            </div>
          ) : (
            <div className={style.textInfo}>
              {descriptionResume}
              <button className={style.showMoreButton} onClick={toggleDescription}>Leer más</button>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            renderForm(true);
          }}
          className={style.buttonSolicited}
          data-isOpen={isOpen}
        >
          Solicitar
        </button>
      </div>
    </div>
  );
}
