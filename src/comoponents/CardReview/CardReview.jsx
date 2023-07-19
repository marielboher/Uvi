import React from "react";
import style from "./CardReview.module.css";
import avatar from "../../assets/avatar.png";

export default function CardReview({nombre, profesion, linkedin, foto, servicios, experiencia }) {
  return (
      <div className={style.contentAll}>
        <div className={style.contetInfoUser}>
          <img src={avatar} alt="" />
          <h6>{nombre}</h6>
        </div>
          <p>{profesion}</p>
          <p>{servicios}</p>
        <p className={style.reviewText}>{experiencia}</p>
      </div>
  );
}
