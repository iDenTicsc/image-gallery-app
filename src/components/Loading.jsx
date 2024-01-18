import React from "react";

//Este componente tiene la animacion de pantalla de carga de bootstrap
const Loading = () => {
  return (
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
