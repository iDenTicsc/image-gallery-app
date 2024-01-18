import React from "react";
import PropTypes from "prop-types";

//Componente que dibuja las cards que se van a mostrar en mi imagen
const Card = ({ img }) => {
  return (
    <div>
      <div
        className="card m-2"
        style={{
          width: "18rem",
        }}
      >
        <img src={img} className="card-img-top" alt="imagen.png" />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
